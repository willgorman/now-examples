const micro = require('micro')

module.exports = micro((req, res) => {
  return 'Hello from Micro on Now 2.0!'
})