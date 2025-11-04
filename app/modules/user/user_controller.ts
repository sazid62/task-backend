import type { HttpContext } from '@adonisjs/core/http'
import UserService from './user_service.js'
import { registerValidator, loginValidator } from './user_validator.js'

export default class UserController {
  private userService = new UserService()

  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await this.userService.register(data)
    return response.created({
      message: 'User registered successfully',
      data: user,
    })
  }

  async login(ctx: HttpContext) {
    const { email, password } = await ctx.request.validateUsing(loginValidator)
    const user = await this.userService.login(ctx, email, password)
    return ctx.response.ok({
      message: 'Login successful',
      data: user,
    })
  }

  async logout(ctx: HttpContext) {
    await this.userService.logout(ctx)
    return ctx.response.ok({
      message: 'Logout successful',
    })
  }

  async me(ctx: HttpContext) {
    const user = await this.userService.getCurrentUser(ctx)
    return ctx.response.ok({
      data: user,
    })
  }
}
