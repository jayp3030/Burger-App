/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React from "react";

const Pagination = ({ totalPages, currPage, prevPage, nextPage , firstPage , lastPage }) => {
  return (
    <div className="page-btns">
      <button className="firstPage-btn" onClick={() => firstPage()}><i className="fa-solid fa-angles-left"></i></button>
      <button
        className="prev-btn"
        disabled={currPage === 1}
        onClick={() => prevPage()}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div>
        <h3>
          {currPage} of {totalPages}
        </h3>
      </div>
      <button
        className="next-btn"
        disabled={currPage === totalPages}
        onClick={() => nextPage()}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button className="lastPage-btn" onClick={() => lastPage()}><i className="fa-solid fa-angles-right"></i></button>
    </div>
  );
};

export default React.memo(Pagination);
