import express from 'express'
const router = express.Router()
import {} from '../controllers/productController'

router.route('/', )

// @desc    Fetch single product
// @routes  GET /api/products/:id
// @access  Public
router.get("/:id", asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router