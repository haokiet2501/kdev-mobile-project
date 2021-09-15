import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/productController'

router.route('/').get(getProducts)
router.route('/')
export default router