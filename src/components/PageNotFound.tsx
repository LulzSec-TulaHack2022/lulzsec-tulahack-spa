import React from 'react'

import { Container, Box, Typography } from '@mui/material'

const PageNotFound = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography variant="h2" align="center">
          Page not found
        </Typography>
        <Typography variant="h4" align="center">
          Sorry... But we can&apos;t find this page :(
        </Typography>
      </Box>
    </Container>
  )
}

export default PageNotFound
