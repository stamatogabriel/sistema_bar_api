"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");
const Token = use("App/Models/Token");
const Database = use("Database");

class AuthController {
  async register({ request, auth, response }) {
  /*  const manager = auth.current.user;
    if (!manager.manager === true) {
      return response.status(400).json({
        status: "error",
        message: "Não autorizado. Comunique ao seu gerente"
      });
    }*/

    const data = request.only(["username", "password", "manager"]);

    const user = await User.create(data);

    return user;
  }

  async authenticate({ request, auth }) {
    const { username, password } = request.all();

    const token = await auth.attempt(username, password);

    return token;
  }

  async show({ auth, response }) {
    const manager = auth.current.user;
    if (!manager.manager === true) {
      return response.status(400).json({
        status: "error",
        message: "Não autorizado. Comunique ao seu gerente"
      });
    }

    const users = await User.all();

    return users;
  }

  async getUser ({ request, auth, response }) {
    const user = auth.current.user;

    return user;
  }

  async changePassword({ request, auth, response }) {
    const user = auth.current.user;
    const { password, newPassword } = request.all();

    const verifyPassword = await Hash.verify(
      password,
      user.password
    );

    if (!verifyPassword) {
      return response.status(400).json({
        status: "error",
        message: "Current password could not be verified! Please try again."
      });
    }

    user.password = newPassword;
    await user.save();

    return response.json({
      status: "success",
      message: "Password updated!"
    });
  }

  async resetPassword({ request, auth, response, params }) {
    const user = await User.findOrFail(params.id);
    const manager = auth.current.user;

    if (!manager.manager === true) {
      return response.status(400).json({
        status: "error",
        message: "Não autorizado. Comunique ao seu gerente"
      });
    }

    user.password = await request.input("newPassword");
    await user.save();

    return response.json({
      status: "success",
      message: "Password updated!"
    });
  }

  //logout com problemas
  async logout({ auth, request }) {
    const user = auth.current.user;
    const token = auth.getAuthHeader();

    await user
      .tokens()
      .where("token", token)
      .update({ is_revoked: true });
  }

  async destroy({ params, request, response, auth }) {
    const manager = auth.current.user;

    if (!manager.manager === true) {
      return response.status(400).json({
        status: "error",
        message: "Não autorizado. Comunique ao seu gerente"
      });
    }
    const user = await User.findOrFail(params.id);

    await user.delete();

    return response.json({
      status: "success",
      message: "Usuário Deletado!"
    });
  }
}

module.exports = AuthController;
