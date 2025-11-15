import { BookOpen, Calendar, Building2, ExternalLink } from 'lucide-react'
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'

function CaseDetail({ selectedCase }) {
  if (!selectedCase) {
    return (
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <BookOpen size={64} />
        <Typography variant="h5">Select a case to view details</Typography>
        <Typography variant="body2" sx={{ color: '#475569' }}>
          Choose a case from the list to review the holding, facts, and significance.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, height: '100%', overflowY: 'auto' }}>
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {selectedCase.name}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ color: '#475569' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Calendar size={16} />
            <Typography variant="body2">{selectedCase.year}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Building2 size={16} />
            <Typography variant="body2">{selectedCase.courtLevel}</Typography>
          </Stack>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle1">Citation</Typography>
        <Typography variant="body1">{selectedCase.citation}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">Summary</Typography>
        <Typography variant="body1" sx={{ color: '#1f2937' }}>
          {selectedCase.summary}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">Key Facts</Typography>
        <Box component="ul" sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {selectedCase.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1">Holding</Typography>
        <Typography variant="body1">{selectedCase.holding}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">Significance</Typography>
        <Typography variant="body1">{selectedCase.significance}</Typography>
      </Box>

      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: '8px' }}>
        {selectedCase.categories.map(category => (
          <Chip key={category} label={category} color="secondary" variant="filled" />
        ))}
      </Stack>

      {selectedCase.url && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(selectedCase.url, '_blank', 'noopener,noreferrer')}
          startIcon={<ExternalLink size={18} />}
        >
          Read Full Opinion
        </Button>
      )}
    </Paper>
  )
}

export default CaseDetail
