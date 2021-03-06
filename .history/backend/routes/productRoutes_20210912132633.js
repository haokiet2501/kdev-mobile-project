import express from 'express'
const router = express.Router()
import { getProducts, getProductById, deleteProduct, createProduct } from '../controllers/productController.js'
import { protect, admin } from "../middleware/authMiddleware.js";

router.route('/').get(getProducts).post(protect, admin, )
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)
export default router