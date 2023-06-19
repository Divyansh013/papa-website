import React from 'react'
import { Typography, Box } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';


const Contact = () => {
    const locationLink = "https://goo.gl/maps/5Wv5shVmPviraeKw8";
    const iconStyle = {
        fontSize: '18px',
        verticalAlign: 'middle',
        marginRight: '4px',
      };
  return (
    <Box mt={4} p={2} textAlign="center">
      <Typography variant="h4" gutterBottom sx={{ fontSize: '24px' }}>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px' }}>
      <RoomIcon sx={iconStyle} />
        Visit me at:
        <a href={locationLink} target="_blank" rel="noopener noreferrer">
          My office
        </a>
        </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px' }}>
      <PhoneIcon sx={iconStyle} />
        Call me at: +91 9793299440
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px' }}>
      <WhatsAppIcon sx={iconStyle} />
        Send a message: 
        <a href={`https://wa.me/${919793299440}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px' }}>
      <MailIcon sx={iconStyle} />
        Email me at: kmsrivastava45@gmail.com
      </Typography>
    </Box>
  )
}

export default Contact