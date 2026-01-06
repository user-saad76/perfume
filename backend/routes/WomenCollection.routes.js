import express from 'express'
import {upload} from '../utlils/multer.js';
import { CreateWomenCollection, getallWomenCollection, getWomenCollectionBySlug } from '../controllers/WomenCollection.controller.js';
import { getMenCollectionBySlug } from '../controllers/MenCollection.controller.js';


 const router = express.Router()

 router.route('/women-collections/create').post(upload.single("image"),CreateWomenCollection)
 router.route('/women-collections').get(getallWomenCollection )
 router.route('/women-collections/slug/:slug').get(getWomenCollectionBySlug);
//  router.route('/signature-series/update/:id').put(isAuthenticated,UpdateSignatureSeries)
//  router.route('/signature-series/delete/:id').delete(isAuthenticated,DeleteSignatureSeries)
 export default router