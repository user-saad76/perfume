import express from 'express'
import {  Admin, AdminLogout, signinAdminUser, signupAdminUser } from '../controllers/AdminUser.controller.js'
import { AdminUpload } from '../utlils/Admin-multer.js'
import { isAdminAuthenticated } from '../middleware/AdminAuth.middleware.js'


 const router = express.Router()

 
router.post("/admin-users/Admin-signup",AdminUpload.single("image"), signupAdminUser);
 router.route('/admin-users/Admin-signin').post(signinAdminUser)
   router.route('/admin-users/admin').get(isAdminAuthenticated,Admin)
  router.route('/admin-users/log-out').get(AdminLogout)



 
 export default router