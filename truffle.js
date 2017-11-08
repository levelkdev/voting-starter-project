var HDWalletProvider = require('truffle-hdwallet-provider')
var secrets = require('./secrets.json')

var rinkebyProvider = new HDWalletProvider(secrets.mnemonic, 'https://rinkeby.infura.io/' + secrets.infura_apikey)

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8546,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      network_id: 4,
      provider: rinkebyProvider,
      from: rinkebyProvider.getAddress()
    }
  }
}
