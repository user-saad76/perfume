import express from 'express'
import { signupUser } from '../controllers/user.controller.js'

 const router = express.Router()

 
 router.route('/users/signup').post(signupUser)



 
 export default router