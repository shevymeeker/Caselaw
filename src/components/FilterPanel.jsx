import { Filter } from 'lucide-react'
import { Button, Paper, Stack, TextField } from '@mui/material'

function FilterPanel({ filters, setFilters, options }) {
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      courtLevel: 'all',
      year: 'all',
      category: 'all',
    })
  }

  const hasActiveFilters =
    filters.courtLevel !== 'all' ||
    filters.year !== 'all' ||
    filters.category !== 'all'

  return (
    <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Filter size={18} />
        <strong>Filters</strong>
        {hasActiveFilters && (
          <Button variant="text" color="primary" onClick={resetFilters}>
            Reset
          </Button>
        )}
      </Stack>
      <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
        <TextField
          select
          label="Court Level"
          value={filters.courtLevel}
          onChange={event => handleFilterChange('courtLevel', event.target.value)}
        >
          <option value="all">All Courts</option>
          {options.courtLevels.map(level => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Year"
          value={filters.year}
          onChange={event => handleFilterChange('year', event.target.value)}
        >
          <option value="all">All Years</option>
          {options.years.map(year => (
            <option key={year} value={String(year)}>
              {year}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Category"
          value={filters.category}
          onChange={event => handleFilterChange('category', event.target.value)}
        >
          <option value="all">All Categories</option>
          {options.categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </TextField>
      </Stack>
    </Paper>
  )
}

export default FilterPanel
