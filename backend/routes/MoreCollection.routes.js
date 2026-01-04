import express from 'express'
import {upload} from '../utlils/multer.js';
import { CreateMoreCollection, getMoreCollection, getMoreCollectionBySlug } from '../controllers/MoreCollection.controller.js';
 const router = express.Router()

 router.route('/more-collections/create').post(upload.single("image"),CreateMoreCollection)
  router.route('/more-collections').get(getMoreCollection)
 router.route('/more-collections/slug/:slug').get(getMoreCollectionBySlug);
//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router