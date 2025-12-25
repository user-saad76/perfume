import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js'
import { CreateFeedback } from '../controllers/Feedback.controller.js'


 const router = express.Router()

 
 router.route('/feedback/feedback-create').post(CreateFeedback)

  export default router