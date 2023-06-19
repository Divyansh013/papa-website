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
              "I am Krishna Mohan Srivastava, an experienced lawyer based in Faizabad/Ayodhya. With over 25 years of legal practice, I have earned a reputation as one of the topmost legal professionals in the region. My focus lies in civil and criminal law, and I am dedicated to providing exceptional legal expertise to my clients.I hold the esteemed position of being a panel lawyer for renowned institutions such as the State Bank of India (SBI), Life Insurance Corporation (LIC), Punjab and Sind Bank, and Bank of Maharashtra."
            }
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
