/* global artifacts */

const ShrimpCoin = artifacts.require('ShrimpCoin')
const Voting = artifacts.require('Voting')

module.exports = function (deployer) {
  deployer.deploy(
    ShrimpCoin,
    Voting
  )
}
