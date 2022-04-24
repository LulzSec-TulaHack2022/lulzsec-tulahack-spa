import React from 'react'

import { Typography, Paper, Stack, Box } from '@mui/material'
import { useSelector } from 'react-redux'

const Statistics: React.FC = () => {
  const { wateringCount, plantCount } = useSelector(
    (state: any) => state.statistics,
  )

  return (
    <Box mt={8}>
      <Typography variant="h5" fontWeight="bold">
        Ваша статистика
      </Typography>
      <Stack direction="row" spacing={2} p={1}>
        <Paper
          sx={{
            display: 'inline-block',
            padding: 1.5,
            backgroundColor: 'grey.100',
            borderRadius: 3,
            boxShadow: 'none',
          }}
        >
          <Stack spacing={0.5} alignItems="center">
            <Typography variant="h3">{wateringCount}</Typography>
            <Typography variant="caption">Циклов полива</Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            display: 'inline-block',
            padding: 1.5,
            backgroundColor: 'grey.100',
            borderRadius: 3,
            boxShadow: 'none',
          }}
        >
          <Stack spacing={0.5} alignItems="center">
            <Typography variant="h3">{plantCount}</Typography>
            <Typography variant="caption">Растений в списке</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Statistics
