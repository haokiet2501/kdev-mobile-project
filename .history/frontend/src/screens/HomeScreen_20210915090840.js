import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/HomeScreen.css";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <h1 className="title_home">Sản phẩm</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="row_home">
          <div className="col_home">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
