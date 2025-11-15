const PRIMARY_KEY_PATTERN = /^([+]{0,2})(.*)$/

export function parseStoreSchema(schemaString) {
  const tokens = schemaString
    .split(',')
    .map(token => token.trim())
    .filter(Boolean)

  if (tokens.length === 0) {
    throw new Error('Dexie-lite: schema string cannot be empty')
  }

  const primaryToken = tokens[0]
  const [, modifiers, keyPathRaw] = primaryToken.match(PRIMARY_KEY_PATTERN)
  const autoIncrement = modifiers.includes('+')
  const keyPath = keyPathRaw || undefined

  const indexes = tokens.slice(1).map(token => {
    const multiEntry = token.startsWith('*')
    const name = multiEntry ? token.slice(1) : token
    const keyPath = name
    return { name, keyPath, multiEntry }
  })

  return {
    keyPath,
    autoIncrement,
    indexes,
  }
}
