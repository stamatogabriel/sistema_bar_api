"use strict";
const User = use("App/Models/User");

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

  async update({ auth, request, response, params }) {
    const user = await User.findOrFail(params.id);
    if (auth.id === params.id) {
      return response.send("Não autorizado");
    }
    const { password } = request.all();

    user.password = password;

    user.save();

    return user;
  }
}

module.exports = AuthController;
