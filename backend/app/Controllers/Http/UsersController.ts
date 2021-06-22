import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return users
  }

  public async store(ctx: HttpContextContract) {
    const data = ctx.request.only(['username', 'email', 'password', 'phoneNumber'])

    const create = await User.create(data)

    return { name: create.username, email: create.email }
  }
}
