import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    description: vine.string().trim().optional(),
    price: vine.number().positive(),
    stock: vine.number().min(0),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).optional(),
    description: vine.string().trim().optional(),
    price: vine.number().positive().optional(),
    stock: vine.number().min(0).optional(),
  })
)
