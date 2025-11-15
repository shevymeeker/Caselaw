import { Search, X } from 'lucide-react'
import { IconButton, InputAdornment, TextField } from '@mui/material'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="Search cases"
      placeholder="Search by case name, citation, holding, or fact pattern"
      value={searchTerm}
      onChange={event => setSearchTerm(event.target.value)}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search size={18} />
          </InputAdornment>
        ),
        endAdornment:
          searchTerm !== '' ? (
            <InputAdornment position="end">
              <IconButton ariaLabel="Clear search" onClick={() => setSearchTerm('')}>
                <X size={16} />
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  )
}

export default SearchBar
