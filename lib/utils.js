// Helpers for creating kebab-case/PascalCase versions of string
exports.pascalify = string => {
  const camelized = string.replace(/-([a-z0-9])/g, (c) => c[1].toUpperCase())
  return camelized.charAt(0).toUpperCase() + camelized.slice(1)
}

exports.kebabcase = string => {
  return string
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
