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
        <i
          className={
            value >= 2
              ? "bx bxs-star"
              : value >= 1.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
        <i
          className={
            value >= 1
              ? "bx bxs-star"
              : value >= 0.5
              ? "bx bxs-star-halt"
              : "bx bx-star"
          }
        ></i>
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
    </>
  );
};

export default Rating;
