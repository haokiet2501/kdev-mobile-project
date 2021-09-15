import React from "react";
import { Link } from 'reac'
import '../js/paginate'

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div>
          <ul>
              <li className="prev">Trước</li>
              <li className="pageNumber"></li>
              <li className="next">Sau</li>
          </ul>
      </div>
    )
  );
};

export default Paginate;
