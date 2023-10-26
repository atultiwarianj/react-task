import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CardComponent from "./Card";
import { Avatar, Button, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import SmallCard from "./Smallcard";

const Dashboard = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Grid
        container
        gap={2}
        md={11}
        bgcolor="#e1f5fe
"
      >
        <Grid bgcolor="white" item md={3} m={2} borderRadius={5}>
          <Grid sx={{ flexGrow: 1 }} pt="25px">
            <Grid
              style={{
                marginTop: "100px",
                height: "100%",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <Paper
                elevation={3}
                bgcolor="red"
                width="100px"
                style={{
                  display: "flex",
                  border: "2px solid",
                  borderRadius: "10px",
                  minWidth: "268px",
                }}
              >
                <Box style={{ margin: "23px", display: "flex", gap: "8px" }}>
                  <Avatar sx={{ bgcolor: "deepPurple[500]" }}>OP</Avatar>
                  <Typography sx={{ width: "100%" }} display="block">
                    Hi Reader
                  </Typography>
                </Box>
              </Paper>
              <Paper
                elevation={3}
                bgcolor="red"
                style={{
                  border: "2px solid",
                  borderRadius: "10px",
                  minWidth: "250px",
                }}
              >
              <Typography align="center" fontSize={30} fontWeight={700}>View Toggle</Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                style={{margin:"10px"}}
                >
                  <ToggleButton style={{ padding: "15px 42px" }} value="web">
                    Web
                  </ToggleButton>
                  <ToggleButton
                    style={{ padding: "15px 30px" }}
                    value="android"
                  >
                    Android
                  </ToggleButton>
                  {/* </Stack> */}
                </ToggleButtonGroup>
              </Paper>
              <Paper
                elevation={3}
                bgcolor="red"
                style={{ border: "2px solid", borderRadius: "10px" }}
              >
                <Typography sx={{ width: "100%" }} fontSize="30px" p={1}>
                  Have a feedBack?
                </Typography>
                <Box  align="center" m={1}>
                <Button variant="contained" sx={{backgroundColor:"#69f0ae"}} size="large">We're Listening!</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid bgcolor="#80deea" item md={8} m={2}>
          {alignment == "web" ? <CardComponent /> : <SmallCard />}
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
