import { useEffect, useMemo, useState } from 'react'
import { Box, Container, Stack, Typography, CircularProgress, Paper } from '@mui/material'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import CaseList from './components/CaseList'
import CaseDetail from './components/CaseDetail'
import { fetchAllCases, initializeDatabase } from './data/db'

const DEFAULT_FILTERS = {
  courtLevel: 'all',
  year: 'all',
  category: 'all',
}

function buildFilterOptions(cases) {
  const courtLevels = Array.from(new Set(cases.map(caseItem => caseItem.courtLevel))).sort()
  const years = Array.from(new Set(cases.map(caseItem => caseItem.year))).sort((a, b) => b - a)
  const categories = Array.from(
    new Set(cases.flatMap(caseItem => caseItem.categories ?? []))
  ).sort()

  return { courtLevels, years, categories }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [allCases, setAllCases] = useState([])
  const [selectedCaseId, setSelectedCaseId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadCases() {
      try {
        await initializeDatabase()
        const records = await fetchAllCases()
        if (!active) return
        setAllCases(records)
        if (records.length > 0) {
          setSelectedCaseId(records[0].id)
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadCases()
    return () => {
      active = false
    }
  }, [])

  const filterOptions = useMemo(() => buildFilterOptions(allCases), [allCases])

  const filteredCases = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    return allCases.filter(caseItem => {
      const matchesSearch =
        normalizedSearch === '' ||
        caseItem.nameLower.includes(normalizedSearch) ||
        caseItem.citationLower.includes(normalizedSearch) ||
        caseItem.searchTokens.some(token => token.startsWith(normalizedSearch))

      const matchesCourt =
        filters.courtLevel === 'all' || caseItem.courtLevel === filters.courtLevel

      const matchesYear = filters.year === 'all' || String(caseItem.year) === filters.year

      const matchesCategory =
        filters.category === 'all' || (caseItem.categories || []).includes(filters.category)

      return matchesSearch && matchesCourt && matchesYear && matchesCategory
    })
  }, [allCases, filters, searchTerm])

  useEffect(() => {
    if (filteredCases.length === 0) {
      return
    }

    if (!selectedCaseId || !filteredCases.some(item => item.id === selectedCaseId)) {
      setSelectedCaseId(filteredCases[0].id)
    }
  }, [filteredCases, selectedCaseId])

  const selectedCase = useMemo(() => {
    return filteredCases.find(caseItem => caseItem.id === selectedCaseId) || null
  }, [filteredCases, selectedCaseId])

  return (
    <div className="app">
      <Header />
      <Box component="main" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5">Search Kentucky case law offline</Typography>
              <Typography variant="body2" sx={{ color: '#475569' }}>
                The app shell loads instantly from cache, and case data is synchronized to
                IndexedDB on first load for field-ready access.
              </Typography>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Paper>

            <FilterPanel filters={filters} setFilters={setFilters} options={filterOptions} />

            {loading ? (
              <Paper sx={{ p: 6, textAlign: 'center' }}>
                <CircularProgress size={48} />
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Loading case summaries from your offline cache…
                </Typography>
              </Paper>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <CaseList
                  cases={filteredCases}
                  selectedCaseId={selectedCaseId}
                  onSelectCase={setSelectedCaseId}
                />
                <CaseDetail selectedCase={selectedCase} />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default App
