'use strict'

class AuthManager {

  async handle ({ request, auth }, next) {
    const user = auth.current.user;
    if(user.manager === true)
    await next()
  }
}

module.exports = AuthManager
