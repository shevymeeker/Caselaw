import { Scale } from 'lucide-react'
import { Box, Chip, Container, Stack, Typography } from '@mui/material'

function Header() {
  return (
    <Box
      component="header"
      sx={{
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        color: 'white',
        boxShadow: '0 20px 40px rgba(30, 58, 138, 0.25)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
          sx={{ py: 3 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '14px',
                padding: '12px',
                display: 'inline-flex',
              }}
            >
              <Scale size={32} />
            </Box>
            <Box>
              <Typography variant="h4">Kentucky Search &amp; Seizure</Typography>
              <Typography variant="subtitle1">
                Fourth Amendment Case Law Explorer
              </Typography>
            </Box>
          </Stack>
          <Chip label="Law Enforcement Training Resource" color="secondary" variant="outlined" />
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
