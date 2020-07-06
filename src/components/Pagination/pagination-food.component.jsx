import React from "react";
import "./pagination.styles.css";

const PaginationFood = ({ itemsPerPage, totalItems, paginateFood }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginateFood(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationFood;
