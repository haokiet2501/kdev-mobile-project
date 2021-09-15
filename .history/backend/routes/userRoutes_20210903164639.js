import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/UController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
export default router