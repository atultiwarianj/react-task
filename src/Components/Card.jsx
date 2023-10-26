import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Fab, Grid, Paper } from "@mui/material";
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
      {currentPosts.map((alldata, index) => {
        return (
          <Grid style={{ display: "flex" }} key={index} md={12}>
            <Grid md={6}>
              <Paper
                variant="outlined"
                orientation="horizontal"
                sx={{
                  m: "10px",
                  display: "flex",
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
            </Grid>

            <Grid
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="button"
                onClick={() => handleClick(alldata.id)}
                style={{ color: "red" }}
              >
                <Fab style={{ color: "error" }} aria-label="delete">
                  x
                </Fab>
              </Button>
            </Grid>
          </Grid>
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
