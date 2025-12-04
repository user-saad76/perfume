import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import {  signupAdminUser } from '../controllers/AdminUser.controller.js'
import { upload } from '../utlils/multer.js'

 const router = express.Router()

 
router.post("/admin-users/Admin-signup", upload.single("image"), signupAdminUser);
 //router.route('/admin-users/Admin-signin').post(signinAdminUser)
//  router.route('/users/me').get(isAuthenticated,getMe)
//  router.route('/users/log-out').get(Logout)



 
 export default router