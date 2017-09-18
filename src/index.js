var MetaCoin = require('./MetaCoin')

module.exports = (opts) => {
  return {
    MetaCoin: MetaCoin(opts)
  }
}
