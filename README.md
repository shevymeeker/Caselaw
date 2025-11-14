# Kentucky Search & Seizure Case Law Explorer

A modern web application for exploring and filtering Kentucky Fourth Amendment case law. Built for law enforcement training and legal education.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)

## 🎯 Features

- **🔍 Advanced Search**: Search cases by name, citation, or keywords
- **🎚️ Smart Filtering**: Filter by court level, year, and legal categories
- **📖 Detailed Case Information**: View comprehensive case details including:
  - Full citation
  - Case summary
  - Key facts
  - Legal holding
  - Significance
  - Related categories
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds
- **♿ Accessible**: Follows WCAG accessibility guidelines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shevymeeker/Caselaw.git
cd Caselaw

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Caselaw/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── CaseList.jsx
│   │   └── CaseDetail.jsx
│   ├── data/              # Data files
│   │   └── cases.js       # Case law data
│   ├── styles/            # CSS stylesheets
│   │   └── index.css
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── public/                # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies and scripts
├── .eslintrc.cjs         # ESLint configuration
├── .prettierrc           # Prettier configuration
└── .gitignore            # Git ignore rules
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier
- **Styling**: Custom CSS with CSS Variables

## 📚 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🎨 Customization

### Adding New Cases

Edit `src/data/cases.js` to add new cases:

```javascript
{
  id: 7,
  name: 'Commonwealth v. Example',
  citation: '999 Ky. 999 (2024)',
  year: 2024,
  courtLevel: 'supreme',
  summary: 'Brief case summary...',
  facts: ['Fact 1', 'Fact 2'],
  holding: 'The court held that...',
  significance: 'This case is significant because...',
  categories: ['warrant', 'vehicle'],
  url: 'http://example.com'
}
```

### Styling

Modify CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #059669;
  /* ... more variables */
}
```

## 🔒 Security Features

- Input sanitization for search queries
- No use of `dangerouslySetInnerHTML`
- Secure external link handling with `rel="noopener noreferrer"`
- CSP-ready architecture

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Run `npm run lint` before committing
- Run `npm run format` to format code
- Follow existing code patterns and conventions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 Educational Purpose

This application is designed for:
- Law enforcement training
- Legal education
- Fourth Amendment research
- Case law reference

## 📞 Contact

Project Link: [https://github.com/shevymeeker/Caselaw](https://github.com/shevymeeker/Caselaw)

## 🙏 Acknowledgments

- Kentucky Department of Criminal Justice Training
- React and Vite communities
- All contributors to this project

---

**Note**: This is a training and educational resource. Always consult official legal sources and qualified attorneys for legal advice.
