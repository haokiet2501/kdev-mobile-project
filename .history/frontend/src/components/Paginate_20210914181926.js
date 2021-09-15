import React from "react";
import { Link } from 'react-router-dom'
import '../js/paginate'

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div>
          <ul>
              <li className="prev">Trước</li>
              <li className="pageNumber">
                {[...Array(pages).keys()].map(x =>(
                    <Link key={x + 1} to={keyword ? /}></Link>
                ))}
              </li>
              <li className="next">Sau</li>
          </ul>
      </div>
    )
  );
};

export default Paginate;
