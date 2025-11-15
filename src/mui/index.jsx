/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useId } from 'react'
import './styles.css'

const defaultTheme = {
  palette: {
    mode: 'light',
    primary: '#1e40af',
    secondary: '#059669',
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceAlt: '#f1f5f9',
    border: '#d4d4d8',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
  },
}

const ThemeContext = createContext(defaultTheme)

export const createTheme = overrides => ({
  ...defaultTheme,
  ...overrides,
})

export function ThemeProvider({ theme, children }) {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    palette: {
      ...defaultTheme.palette,
      ...(theme?.palette || {}),
    },
  }

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function CssBaseline() {
  return null
}

function mergeStyles(sx) {
  if (!sx) return undefined
  if (Array.isArray(sx)) {
    return Object.assign({}, ...sx)
  }
  return sx
}

export function Container({ maxWidth = 'lg', sx, children }) {
  const className = `mui-container mui-container--${maxWidth}`
  return (
    <div className={className} style={mergeStyles(sx)}>
      {children}
    </div>
  )
}

export function Box({ component: Component = 'div', sx, children, ...rest }) {
  return (
    <Component className="mui-box" style={mergeStyles(sx)} {...rest}>
      {children}
    </Component>
  )
}

export function Stack({ direction = 'column', spacing = 2, alignItems = 'stretch', children, sx }) {
  const spacingValue = typeof spacing === 'number' ? spacing * 4 : spacing
  return (
    <div
      className="mui-stack"
      style={{
        flexDirection: direction,
        gap: typeof spacingValue === 'number' ? `${spacingValue}px` : spacingValue,
        alignItems,
        ...mergeStyles(sx),
      }}
    >
      {children}
    </div>
  )
}

export function Paper({ elevation = 1, sx, children }) {
  return (
    <div className={`mui-paper mui-paper--elevation-${elevation}`} style={mergeStyles(sx)}>
      {children}
    </div>
  )
}

const TYPO_VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  overline: 'span',
}

export function Typography({ variant = 'body1', component, children, sx, color }) {
  const Component = component || TYPO_VARIANTS[variant] || 'p'
  const className = `mui-typography mui-typography--${variant}`
  return (
    <Component className={className} style={{ color, ...mergeStyles(sx) }}>
      {children}
    </Component>
  )
}

export function Chip({ label, color = 'default', variant = 'filled' }) {
  const className = `mui-chip mui-chip--${variant} mui-chip--${color}`
  return <span className={className}>{label}</span>
}

export function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  children,
  onClick,
  startIcon,
  disabled,
  type = 'button',
}) {
  const className = `mui-button mui-button--${variant} mui-button--${color} mui-button--${size}`
  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {startIcon && <span className="mui-button__icon">{startIcon}</span>}
      {children}
    </button>
  )
}

export function IconButton({ children, onClick, ariaLabel }) {
  return (
    <button className="mui-icon-button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export function InputAdornment({ position = 'start', children }) {
  return <span className={`mui-input-adornment mui-input-adornment--${position}`}>{children}</span>
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  fullWidth = false,
  InputProps = {},
  helperText,
  multiline = false,
  rows = 3,
  select = false,
  children,
}) {
  const id = useId()
  const className = `mui-text-field ${fullWidth ? 'mui-text-field--full' : ''}`
  const inputProps = {
    id,
    value,
    onChange,
    placeholder,
    type,
    className: 'mui-text-field__input',
  }

  let inputElement
  if (select) {
    inputElement = (
      <select {...inputProps}>
        {children}
      </select>
    )
  } else if (multiline) {
    inputElement = <textarea {...inputProps} rows={rows} />
  } else {
    inputElement = <input {...inputProps} />
  }

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mui-text-field__label">
          {label}
        </label>
      )}
      <div className="mui-text-field__wrapper">
        {InputProps.startAdornment}
        {inputElement}
        {InputProps.endAdornment}
      </div>
      {helperText && <div className="mui-text-field__helper">{helperText}</div>}
    </div>
  )
}

export function MenuItem({ value, children }) {
  return (
    <option value={value} className="mui-menu-item">
      {children}
    </option>
  )
}

export function List({ children, dense = false, sx }) {
  return (
    <div className={`mui-list ${dense ? 'mui-list--dense' : ''}`} style={mergeStyles(sx)}>
      {children}
    </div>
  )
}

export function ListItemButton({ children, selected = false, onClick }) {
  const className = `mui-list-item-button ${selected ? 'mui-list-item-button--selected' : ''}`
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export function ListItemText({ primary, secondary }) {
  return (
    <div className="mui-list-item-text">
      <div className="mui-list-item-text__primary">{primary}</div>
      {secondary && <div className="mui-list-item-text__secondary">{secondary}</div>}
    </div>
  )
}

export function Divider() {
  return <hr className="mui-divider" />
}

export function CircularProgress({ size = 40 }) {
  return (
    <div className="mui-circular-progress" style={{ width: size, height: size }}>
      <div className="mui-circular-progress__spinner" />
    </div>
  )
}
