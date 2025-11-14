import { Scale } from 'lucide-react'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Scale className="logo-icon" size={32} />
          <div>
            <h1 className="app-title">Kentucky Search & Seizure</h1>
            <p className="app-subtitle">Fourth Amendment Case Law Explorer</p>
          </div>
        </div>
        <div className="header-info">
          <span className="badge">Law Enforcement Training Resource</span>
        </div>
      </div>
    </header>
  )
}

export default Header
