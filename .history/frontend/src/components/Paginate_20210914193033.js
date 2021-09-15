import React from "react";
import { Link } from "react-router-dom";
import '../css/Paginate.css'

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div className="paginate_main">
        <ul>
            {[...Array(pages).keys()].map((x) => (
              <Link
                key={x + 1}
                to={
                  !akeyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                }
              >
                <li className="pageNumber" active={x+1 === page}>{x + 1}</li>
              </Link>
            ))}
        </ul>
      </div>
    )
  );
};

export default Paginate;
