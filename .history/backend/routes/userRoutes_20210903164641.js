import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
export default router