import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UserService {
  async register(data: { fullName?: string; email: string; password: string }) {
    const user = await User.create(data)
    return user
  }

  async login(ctx: HttpContext, email: string, password: string) {
    const user = await User.verifyCredentials(email, password)
    await ctx.auth.use('web').login(user)
    return user
  }

  async logout(ctx: HttpContext) {
    await ctx.auth.use('web').logout()
  }

  async getCurrentUser(ctx: HttpContext) {
    await ctx.auth.check()
    return ctx.auth.user
  }
}
