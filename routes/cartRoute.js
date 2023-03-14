import { Router } from 'express'
import { createCartItem } from '../controllers/cart'

const router = new Router()

router.post('/cart', createCartItem)

export default router