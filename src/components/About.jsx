import React from 'react'
import { Typography, Box,Container } from '@mui/material';

const About = () => {
  return (
    <Box mt={6} p={4} textAlign="center">
      <Typography variant="h4" gutterBottom mt={6}>
        About Me
      </Typography>
      <Container maxWidth="md">
        <Typography variant="body1" style={{ lineHeight: 1.2 }}>
          {"I did my LLB from RMLU University in the year 1998, embarking on my journey into the legal profession with a strong foundation of knowledge and a passion for justice. Over the past 25 years, I have honed my legal skills and developed a deep understanding of civil and criminal law. Throughout my career, I have dedicated myself to providing exceptional legal expertise to clients in Faizabad/Ayodhya and beyond. My commitment to upholding the principles of justice and my unwavering dedication to my clients have been the driving forces behind my success. With each case I handle, my goal is to protect my clients' rights, navigate complex legal matters, and achieve favorable outcomes. I take pride in my client-centric approach, fostering open communication, and ensuring my clients are well-informed and supported throughout the legal process. As a panel lawyer for esteemed institutions such as the State Bank of India (SBI), Life Insurance Corporation (LIC), Punjab and Sind Bank, and Bank of Maharashtra, I am trusted to provide top-notch legal services. I am Krishna Mohan Srivastava, an experienced lawyer you can rely on for comprehensive legal solutions tailored to your specific needs."}
        </Typography>
      </Container>
    </Box>
  )
}

export default About