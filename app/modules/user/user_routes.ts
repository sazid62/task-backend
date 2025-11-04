import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const UserController = () => import('./user_controller.js')

export default function userRoutes() {
  router
    .group(() => {
      router.post('/register', [UserController, 'register'])
      router.post('/login', [UserController, 'login'])
      router.post('/logout', [UserController, 'logout']).use(middleware.auth())
      router.get('/me', [UserController, 'me']).use(middleware.auth())
    })
    .prefix('/auth')
}
