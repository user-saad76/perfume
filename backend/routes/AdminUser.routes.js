import express from 'express'
import {  Admin, signinAdminUser, signupAdminUser } from '../controllers/AdminUser.controller.js'
import { AdminUpload } from '../utlils/Admin-multer.js'
import { isAdminAuthenticated } from '../middleware/AdminAuth.middleware.js'

 const router = express.Router()

 
router.post("/admin-users/Admin-signup",AdminUpload.single("image"), signupAdminUser);
 router.route('/admin-users/Admin-signin').post(signinAdminUser)
   router.route('/admin-users/admin').get(Admin)
//  router.route('/users/log-out').get(Logout)



 
 export default router