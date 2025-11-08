import { BookOpen, Calendar, Building2, ExternalLink } from 'lucide-react'

function CaseDetail({ selectedCase }) {
  if (!selectedCase) {
    return (
      <div className="case-detail">
        <div className="no-selection">
          <BookOpen size={64} />
          <h2>Select a case to view details</h2>
          <p>Click on any case from the list to see full information</p>
        </div>
      </div>
    )
  }

  return (
    <div className="case-detail">
      <div className="detail-header">
        <h2>{selectedCase.name}</h2>
        <div className="detail-meta">
          <span className="meta-item">
            <Calendar size={16} />
            {selectedCase.year}
          </span>
          <span className="meta-item">
            <Building2 size={16} />
            {selectedCase.courtLevel}
          </span>
        </div>
      </div>

      <div className="detail-section">
        <h3>Citation</h3>
        <p className="citation-text">{selectedCase.citation}</p>
      </div>

      <div className="detail-section">
        <h3>Summary</h3>
        <p>{selectedCase.summary}</p>
      </div>

      <div className="detail-section">
        <h3>Key Facts</h3>
        <ul className="facts-list">
          {selectedCase.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h3>Holding</h3>
        <p className="holding-text">{selectedCase.holding}</p>
      </div>

      <div className="detail-section">
        <h3>Significance</h3>
        <p>{selectedCase.significance}</p>
      </div>

      <div className="detail-section">
        <h3>Categories</h3>
        <div className="case-tags">
          {selectedCase.categories.map(category => (
            <span key={category} className="tag tag-large">
              {category}
            </span>
          ))}
        </div>
      </div>

      {selectedCase.url && (
        <div className="detail-actions">
          <a
            href={selectedCase.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={18} />
            Read Full Opinion
          </a>
        </div>
      )}
    </div>
  )
}

export default CaseDetail
