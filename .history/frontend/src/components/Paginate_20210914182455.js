import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div>
        <ul>
            {[...Array(pages).keys()].map((x) => (
              <Link
                key={x + 1}
                to={
                  keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                }
              >
                <li className="pageNumber" active={x+1 === page}>{x + 1}</li>
              </Link>

            ))}

          <li className="next">Sau</li>
        </ul>
      </div>
    )
  );
};

export default Paginate;
