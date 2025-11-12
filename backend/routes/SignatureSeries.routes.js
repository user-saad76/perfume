import express from 'express'
import { CreateSignatureSeries, DeleteSignatureSeries, getAllSignatureSeries, getSignatureSeriesById, UpdateSignatureSeries } from '../controllers/SignatureSeries.controller.js';
 const server = express();
 const router = express.Router()

 router.route('/signature-series/create').post(CreateSignatureSeries)
 router.route('/signature-series').get(getAllSignatureSeries)
 router.route('/signature-series/:id').get(getSignatureSeriesById)
 router.route('/signature-series/update').put(UpdateSignatureSeries)
 router.route('/signature-series/delete').delete(DeleteSignatureSeries)
 export default router