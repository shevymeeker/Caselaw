import { FileText } from 'lucide-react'
import { Chip, List, ListItemButton, Paper, Stack, Typography } from '@mui/material'

function CaseList({ cases, selectedCaseId, onSelectCase }) {
  if (cases.length === 0) {
    return (
      <Paper sx={{ p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <FileText size={48} />
        <Typography variant="h6">No cases found</Typography>
        <Typography variant="body2">Try adjusting your filters or search keywords.</Typography>
      </Paper>
    )
  }

  return (
    <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
      <Typography variant="subtitle1" color="#475569">
        {cases.length} {cases.length === 1 ? 'case' : 'cases'} found
      </Typography>
      <List sx={{ overflowY: 'auto', maxHeight: '70vh' }}>
        {cases.map(caseItem => (
          <ListItemButton
            key={caseItem.id}
            selected={selectedCaseId === caseItem.id}
            onClick={() => onSelectCase(caseItem.id)}
          >
            <Stack spacing={1} alignItems="flex-start">
              <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                <Typography variant="h5">{caseItem.name}</Typography>
                <Typography variant="body2">{caseItem.year}</Typography>
              </Stack>
              <Typography variant="body2">{caseItem.citation}</Typography>
              <Typography variant="body2" sx={{ color: '#475569' }}>
                {caseItem.summary}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: '8px' }}>
                {caseItem.categories.map(category => (
                  <Chip key={category} label={category} color="primary" variant="filled" />
                ))}
              </Stack>
            </Stack>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  )
}

export default CaseList
