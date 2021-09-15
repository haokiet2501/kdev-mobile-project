import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        
    })

    return (
        <div>
            
        </div>
    )
}

export default ProductCarousel
