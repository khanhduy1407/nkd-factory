
exports.LIB_NAME = 'nkd'
exports.LOG_TITLE = `[${exports.LIB_NAME} info]`

exports.TARGET = {
  UMD: 'umd',
  CJS: 'cjs',
  ESM: 'esm'
}

exports.PARSER = {
  BUBLE: 'buble',
  BABEL: 'babel'
}

exports.COMMAND = {
  BUILD: 'build',
  LINT: 'lint',
  TEST: 'test'
}

exports.FILE = {
  PACKAGE: 'package.json',
  CONFIG: 'nkd.config.js',
  ESLINT: '.eslintrc'
}
