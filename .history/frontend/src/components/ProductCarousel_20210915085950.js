import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import Slider from 'react-slick'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    render() <> {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    return loading ? <Loader /> : error ? <Message>{error}</Message> : (
        <div></div>
    )
}

export default ProductCarousel
