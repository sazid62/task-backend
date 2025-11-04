import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      fullName: 'Easar Mostafa Sajid',
      email: 'sajid@gmail.com',
      password: '12345678',
    })
  }
}
