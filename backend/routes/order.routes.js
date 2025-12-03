import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import { CreateOrder } from '../controllers/order.controller.js'

 const router = express.Router()

 
 router.route('/orders/create').post(CreateOrder)
 



 
 export default router