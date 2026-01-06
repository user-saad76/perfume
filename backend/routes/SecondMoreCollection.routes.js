import express from 'express'
import {upload} from '../utlils/multer.js';
import { CreateSecondMoreCollection, getAllSecondMoreCollection } from '../controllers/SecondMoreCollection.controller.js';

 const router = express.Router()

 router.route('/secondmore-collections/create').post(upload.single("image"),CreateSecondMoreCollection)
  router.route('/secondmore-collections').get(getAllSecondMoreCollection)
 //router.route('/more-collections/slug/:slug').get(getMoreCollectionBySlug);
//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router