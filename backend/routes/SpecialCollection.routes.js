import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js';
import {upload} from '../utlils/multer.js';
import { CreateSpecialCollection } from '../controllers/SpecialCollection.controller.js';
 const router = express.Router()

 router.route('/special-collection/create').post(upload.single("image"),CreateSpecialCollection)
//  router.route('/signature-series').get(getAllSignatureSeries)

//  router.route('/signature-series/id/:id').get(getSignatureSeriesById);
// router.route('/signature-series/slug/:slug').get(getSignatureSeriesBySlug);


//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router