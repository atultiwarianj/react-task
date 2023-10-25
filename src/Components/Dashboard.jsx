import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CardComponent from "./Card";
import { Avatar, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Smallcard from "./Smallcard";

const Dashboard = () => {
  const [alignment, setAlignment] = React.useState("web");


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      pt="25px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container spacing={1} columns={16}>
        <Grid xs={5}>
          <Paper
            elevation={3}
            style={{
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
              padding="10px"
              width="100px"
              style={{
                display: "flex",
                border: "2px solid",
                borderRadius: "10px",
                minWidth: "250px",
              }}
            >
              <Box display="flex">
                <Avatar sx={{ bgcolor: "deepPurple[500]" }}>OP</Avatar>
              </Box>

              <Typography sx={{ width: "100%" }} display="block">
                Hi Reader
              </Typography>
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
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="web">Web</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
              </ToggleButtonGroup>
            </Paper>
            <Paper
              elevation={3}
              bgcolor="red"
              style={{ border: "2px solid", borderRadius: "10px" }}
            >
              <Typography sx={{ width: "100%" }} fontSize="30px">
                Have a feedBack?
              </Typography>
            </Paper>
          </Paper>
        </Grid>
        <Grid xs={11}>
          {alignment == "web" ? <CardComponent /> : <Smallcard />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
