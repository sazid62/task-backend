import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const ProductsController = () => import('./products_controller.js')

export default function productsRoutes() {
  router
    .group(() => {
      router.get('/', [ProductsController, 'index'])
      router.get('/:id', [ProductsController, 'show'])
      router.post('/', [ProductsController, 'store'])
      router.put('/:id', [ProductsController, 'update'])
      router.delete('/:id', [ProductsController, 'destroy'])
    })
    .prefix('/products')
    .use(middleware.auth())
}
