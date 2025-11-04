import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Product.create({
      name: 'iPhone 16 Pro',
      description: 'Apple smartphone with A18 Pro chip',
      price: 1200,
      stock: 25,
    })
    await Product.create({
      name: 'MacBook Air M3',
      description: 'Lightweight Apple laptop with M3 chip',
      price: 1500,
      stock: 15,
    })
  }
}
