import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const WelNav = ({loginForm , text}) => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <Box>
        <Box
          width="100%"
          backgroundColor={theme.palette.background.alt}
          p="1rem 6%"
          textAlign="center"
        >
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            Connector
          </Typography>
        </Box>
        <Box
          className="text-center"
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Connector ,
            <br/>{text}
            
          </Typography>
          <div className="container">{loginForm()}</div>
        </Box>
      </Box>
    </div>
  )
}

export default WelNav
