import { Filter } from 'lucide-react'

function FilterPanel({ filters, setFilters }) {
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
    <div className="filter-panel">
      <div className="filter-header">
        <Filter size={18} />
        <span>Filters</span>
        {hasActiveFilters && (
          <button className="reset-filters" onClick={resetFilters}>
            Reset
          </button>
        )}
      </div>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="court-level">Court Level</label>
          <select
            id="court-level"
            value={filters.courtLevel}
            onChange={e => handleFilterChange('courtLevel', e.target.value)}
          >
            <option value="all">All Courts</option>
            <option value="supreme">Supreme Court</option>
            <option value="appeals">Court of Appeals</option>
            <option value="district">District Court</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={filters.year}
            onChange={e => handleFilterChange('year', e.target.value)}
          >
            <option value="all">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={filters.category}
            onChange={e => handleFilterChange('category', e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="warrant">Warrants</option>
            <option value="vehicle">Vehicle Searches</option>
            <option value="consent">Consent Searches</option>
            <option value="plain-view">Plain View</option>
            <option value="exigent">Exigent Circumstances</option>
            <option value="arrest">Arrest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
