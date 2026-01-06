import express from 'express'
import {upload} from '../utlils/multer.js';
import { CreateWomenCollection } from '../controllers/WomenCollection.controller.js';


 const router = express.Router()

 router.route('/women-collections/create').post(upload.single("image"),CreateWomenCollection)
 //router.route('/men-collections').get(getMenCollection)
 //router.route('/men-collections/slug/:slug').get(getMenCollectionBySlug);
//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router