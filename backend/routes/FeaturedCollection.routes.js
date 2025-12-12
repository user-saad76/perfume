import express from 'express'

import { isAuthenticated } from '../middleware/auth.middleware.js';
import {upload} from '../utlils/multer.js';
import { CreateFeaturedCollection, getFeaturedCollection } from '../controllers/FeaturedCollection.controller.js';
 const router = express.Router()

 router.route('/featured-collection/create').post(upload.single("image"),CreateFeaturedCollection)
 router.route('/featured-collection').get(getFeaturedCollection)

//  router.route('/signature-series/id/:id').get(getSignatureSeriesById);
// router.route('/signature-series/slug/:slug').get(getSignatureSeriesBySlug);


//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router