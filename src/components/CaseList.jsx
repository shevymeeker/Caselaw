import { FileText } from 'lucide-react'

function CaseList({ cases, selectedCase, onSelectCase }) {
  if (cases.length === 0) {
    return (
      <div className="case-list">
        <div className="no-results">
          <FileText size={48} />
          <p>No cases found matching your criteria</p>
          <p className="hint">Try adjusting your search or filters</p>
        </div>
      </div>
    )
  }

  return (
    <div className="case-list">
      <div className="case-list-header">
        <span className="results-count">
          {cases.length} {cases.length === 1 ? 'case' : 'cases'} found
        </span>
      </div>
      <div className="cases">
        {cases.map(caseItem => (
          <div
            key={caseItem.id}
            className={`case-card ${selectedCase?.id === caseItem.id ? 'selected' : ''}`}
            onClick={() => onSelectCase(caseItem)}
          >
            <div className="case-card-header">
              <h3 className="case-name">{caseItem.name}</h3>
              <span className="case-year">{caseItem.year}</span>
            </div>
            <p className="case-citation">{caseItem.citation}</p>
            <p className="case-summary">{caseItem.summary}</p>
            <div className="case-tags">
              {caseItem.categories.map(category => (
                <span key={category} className="tag">
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseList
