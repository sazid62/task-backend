/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import userRoutes from '../app/modules/user/user_routes.js'
import productsRoutes from '../app/modules/products/products_routes.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Register module routes
userRoutes()
productsRoutes()
