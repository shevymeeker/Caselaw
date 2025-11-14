import { Search } from 'lucide-react'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        placeholder="Search cases by name, citation, or keywords..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          className="clear-button"
          onClick={() => setSearchTerm('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
