import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Home = () => {
  return (
    <Box mt={4} p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{ borderRadius: "50%", width: 400, height: 400 }}
          >
            <img
              src="src/assets/dp.jpg"
              alt="dp"
              style={{ borderRadius: "50%", width: "100%", height: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom style={{ marginTop: '70px' }}>
            Introduction
          </Typography>
          <Typography variant="body1">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
