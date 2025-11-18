import express from 'express'
import { CreateSignatureSeries, DeleteSignatureSeries, getAllSignatureSeries, getSignatureSeriesById, UpdateSignatureSeries,getSignatureSeriesBySlug } from '../controllers/SignatureSeries.controller.js';
import {upload} from '../utlils/multer.js';
 const router = express.Router()

 router.route('/signature-series/create').post(upload.single("image"),CreateSignatureSeries)
 router.route('/signature-series').get(getAllSignatureSeries)

 router.route('/signature-series/id/:id').get(getSignatureSeriesById);
router.route('/signature-series/slug/:slug').get(getSignatureSeriesBySlug);


 router.route('/signature-series/update/:id').put(UpdateSignatureSeries)
 router.route('/signature-series/delete/:id').delete(DeleteSignatureSeries)
 export default router