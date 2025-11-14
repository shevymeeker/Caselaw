import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import CaseList from './components/CaseList'
import CaseDetail from './components/CaseDetail'
import { casesData } from './data/cases'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCase, setSelectedCase] = useState(null)
  const [filters, setFilters] = useState({
    courtLevel: 'all',
    year: 'all',
    category: 'all',
  })

  // Filter cases based on search and filters
  const filteredCases = casesData.filter(caseItem => {
    const matchesSearch =
      searchTerm === '' ||
      caseItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.citation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.summary.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCourtLevel =
      filters.courtLevel === 'all' || caseItem.courtLevel === filters.courtLevel

    const matchesYear =
      filters.year === 'all' || caseItem.year.toString() === filters.year

    const matchesCategory =
      filters.category === 'all' || caseItem.categories.includes(filters.category)

    return matchesSearch && matchesCourtLevel && matchesYear && matchesCategory
  })

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="search-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <div className="content-grid">
          <CaseList
            cases={filteredCases}
            selectedCase={selectedCase}
            onSelectCase={setSelectedCase}
          />
          <CaseDetail selectedCase={selectedCase} />
        </div>
      </main>
    </div>
  )
}

export default App
