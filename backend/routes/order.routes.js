import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import { CreateOrder, DeleteOrderById, GetallOrders, getOrdersById, UpdateOrderById } from '../controllers/order.controller.js'

 const router = express.Router()

 
 router.route('/orders/create').post(CreateOrder)
  router.route('/orders').get(GetallOrders)
   router.route('/orders/:id').get(getOrdersById)
   router.route('/orders/update/:id').put(UpdateOrderById)
    router.route('/orders/delete/:id').delete(DeleteOrderById)
 



 
 export default router