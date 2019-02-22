"use strict";
const User = use("App/Models/User");
const Hash = use('Hash');
const Token = use('App/Models/Token')
const Database = use('Database')

class AuthController {
  async register({ request }) {
    const data = request.only(["username", "password"]);

    const user = await User.create(data);

    return user;
  }

  async authenticate({ request, auth }) {
    const { username, password } = request.all();

    const token = await auth.attempt(username, password);

    return token;
  }

  async show() {
    const users = await User.all();

    return users;
  }

  async changePassword({ request, auth, response }) {

    const user = auth.current.user

    const verifyPassword = await Hash.verify(
      request.input('password'),
      user.password
    )

    if (!verifyPassword) {
      return response.status(400).json({
        status: 'error',
        message: 'Current password could not be verified! Please try again.'
      })
    }

    user.password = await request.input('newPassword')
    await user.save()

    return response.json({
      status: 'success',
      message: 'Password updated!'
    })
  }

  async resetPassword({ request, auth, response, params }) {

    const user = await User.findOrFail(params.id)
    const manager = auth.current.user

    if (!manager.manager === true) {
      return response.status(400).json({
        status: 'error',
        message: 'Não autorizado. Comunique ao seu gerente'
      })
    }

    user.password = await request.input('newPassword')
    await user.save()

    return response.json({
      status: 'success',
      message: 'Password updated!'
    })
  }

  async logout({ auth, request }) {

    const user = auth.current.user

    await Database.table("tokens")
      .where("user_id", user.id)
      .update("is_revoked", true);
      
    }
}

module.exports = AuthController;
