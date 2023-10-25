import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Paper } from "@mui/material";
import axios from "axios";
import Paginate from "./Pagination";

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const getCardData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Delete function
  const handleClick = (id) => {
    const index = data
      .map((data) => {
        return data.id;
      })
      .indexOf(id);
    console.log(index);
    data.splice(index, 1);
  };

  //   Pagination function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {currentPosts.map((alldata, index) => {
        return (
          <Paper style={{ display: "flex" }} key={index}>
            <Paper
              variant="outlined"
              orientation="horizontal"
              sx={{
                m: "10px",
                display: "flex",
                width: 1000,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="150px"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Box>
              <CardContent>
                <Typography
                  level="title-lg"
                  id="card-description"
                  color="black"
                  fontWeight="700"
                >
                  {alldata.title}
                </Typography>
                <Typography
                  level="body-sm"
                  aria-describedby="card-description"
                  mb={1}
                >
                  {alldata.body}
                </Typography>
              </CardContent>
            </Paper>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="button"
                variant="outlined"
                onClick={() => handleClick(alldata.id)}
                style={{
                  color: "red",
                  marginLeft: "10px",
                  marginRight: "10px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  borderRadius: "50px",
                }}
              >
                x
              </Button>
            </Box>
          </Paper>
        );
      })}
      <Box bgcolor="white">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </Box>
    </>
  );
};

export default CardComponent;
