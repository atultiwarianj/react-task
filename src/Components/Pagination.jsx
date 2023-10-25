import { Box } from "@mui/material";
import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Box>
      <ul
        className="pagination"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "50px",
          gap: "20px",
        }}
      >
        <li
          onClick={previousPage}
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#00a8ff",
            background: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.5s ease",
          }}
        >
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              "page-number " + (number === currentPage ? "active" : "")
            }
          >
            {number}
          </li>
        ))}
        <li
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#00a8ff",
            background: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.5s ease",
          }}
          onClick={nextPage}
        >
          Next
        </li>
      </ul>
    </Box>
  );
};

export default Paginate;
