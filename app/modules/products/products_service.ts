import Product from '#models/product'

export default class ProductsService {
  async getAll() {
    return await Product.all()
  }

  async getById(id: number) {
    return await Product.findOrFail(id)
  }

  async create(data: { name: string; description?: string; price: number; stock: number }) {
    return await Product.create(data)
  }

  async update(
    id: number,
    data: { name?: string; description?: string; price?: number; stock?: number }
  ) {
    const product = await Product.findOrFail(id)
    product.merge(data)
    await product.save()
    return product
  }

  async delete(id: number) {
    const product = await Product.findOrFail(id)
    await product.delete()
  }
}
