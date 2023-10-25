// import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import axios from "axios";
import Paginate from "./Pagination";

const Smallcard = () => {
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
      <Grid
        bgcolor="white"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentPosts.map((alldata, index) => {
          return (
            <>
              {/* <Paper style={{ display: "flex"}} key={index}> */}
              <Card
                sx={{
                  display: "block",
                  maxWidth: 240,
                  minWidth: 240,
                  margin: "5px",
                }}
              >
                <Button
                  type="button"
                  onClick={() => handleClick(alldata.id)}
                  style={{
                    color: "red",
                  }}
                >
                  x
                </Button>

                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ textOverflow: "ellipsis" }}
                    >
                      {alldata.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {alldata.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
              </Card>
            </>
          );
        })}
      </Grid>
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

export default Smallcard;
