import type { HttpContext } from '@adonisjs/core/http'
import ProductsService from './products_service.js'
import { createProductValidator, updateProductValidator } from './products_validator.js'

export default class ProductsController {
  private productsService = new ProductsService()

  async index({ response }: HttpContext) {
    const products = await this.productsService.getAll()
    return response.ok({
      data: products,
    })
  }

  async show({ params, response }: HttpContext) {
    const product = await this.productsService.getById(params.id)
    return response.ok({
      data: product,
    })
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createProductValidator)
    const product = await this.productsService.create(data)
    return response.created({
      message: 'Product created successfully',
      data: product,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(updateProductValidator)
    const product = await this.productsService.update(params.id, data)
    return response.ok({
      message: 'Product updated successfully',
      data: product,
    })
  }

  async destroy({ params, response }: HttpContext) {
    await this.productsService.delete(params.id)
    return response.ok({
      message: 'Product deleted successfully',
    })
  }
}
