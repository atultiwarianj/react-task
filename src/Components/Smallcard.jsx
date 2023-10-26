// import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Paginate from "./Pagination";

const SmallCard = () => {
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
    const index = data.findIndex((item) => item.id === id);
    console.log(index);
    if (index !== -1) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    }
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
        bgcolor="#81d4fa"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentPosts.map((alldata, index) => {
          return (
            <>
              <Card
                sx={{
                  display: "block",
                  maxWidth: 240,
                  minWidth: 240,
                  height:320,
                  margin: "5px",
                  position:"relative",
                  m:1,
                  bgcolor:"white"
                }}
              >
                <Button 
                  type="button"
                  onClick={() => handleClick(alldata.id)}
                  style={{
                    right:0, position:"absolute",
                    color: "red",
                  }}
                >
                  x
                </Button>

                <CardActionArea style={{ height:180,}}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      fontWeight={500}
                      sx={{
                        color: "black",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                      p={2}
                    >
                      {alldata.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {alldata.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardMedia
                p={2}
                style={{ height:140, }}
                  component="img"
                  image="/images/billy-huynh-W8KTS-mhFUE-unsplash.jpg"
                  alt="green iguana"
                />
              </Card>
            </>
          );
        })}
      </Grid>
      <Box bgcolor="#81d4fa">
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

export default SmallCard;
