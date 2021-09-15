import React from "react";

const Rating = ({ value, text }) => {
  return (
    <>
      <span>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? "bx bxs-star"
              : value >= 4.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
      </span>
    </>
  );
};

export default Rating;
