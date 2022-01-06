const format = require('./lib/format')
const data = require('./lib/data')

module.exports = ({ json, cow = 'whale' }) => json
  ? JSON.stringify(data)
  : format({ data, cow })
