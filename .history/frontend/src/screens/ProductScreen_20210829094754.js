import React, { useEffect } from "react";
import "../css/ProductScreen.css";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)

  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

  return (
    <>
      <Link to="/">
        <button className="button">
          <i class="bx bx-arrow-back" />
        </button>
      </Link>
      {loading ? <Loader /> : error ? <Message>{error}</Message> : }
      
    </>
  );
};

export default ProductScreen;
