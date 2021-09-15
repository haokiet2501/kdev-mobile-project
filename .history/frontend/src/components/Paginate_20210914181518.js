import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../'

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div></div>
    )
  );
};

export default Paginate;
