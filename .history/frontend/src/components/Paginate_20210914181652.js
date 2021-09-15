import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../js/paginate'

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div>
          <ul>
              <li className="prev">Trước</li>
              <li className="next">Sau</li>
          </ul>
      </div>
    )
  );
};

export default Paginate;
