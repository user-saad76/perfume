import express from 'express'
import { isAuthenticated } from '../middleware/auth.middleware.js';
import {upload} from '../utlils/multer.js';
import { CreateSpecialCollection, getAllSpecialCollection, getSpecialCollectionBySlug } from '../controllers/SpecialCollection.controller.js';

 const router = express.Router()

 router.route('/special-collection/create').post(upload.single("image"),CreateSpecialCollection)
  router.route('/special-collection').get(getAllSpecialCollection)

//  router.route('/signature-series/id/:id').get(getSignatureSeriesById);
 router.route('/special-collection/slug/:slug').get(getSpecialCollectionBySlug);


//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router