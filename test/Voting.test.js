/* global describe it beforeEach artifacts */

import { expect } from 'chai'
import { web3 } from './helpers/w3'

const Voting = artifacts.require('Voting')


const { accounts } = web3.eth

/* import moment from 'moment'
import lkTestHelpers from 'lk-test-helpers'

const { increaseTime, latestTime } = lkTestHelpers(web3)
*/

describe('Voting', () => {
  let voting, ethAmount
  beforeEach(async () => {
    ethAmount = 10
    voting = await newVoting()
  })
  describe('buy()', () => {
    beforeEach(async () => {
      voting.buy( { value: web3.toWei(ethAmount, 'ether'), from: accounts[1]} )
    })

    it('should increment the sender tokens bought', async () => {
      expect(voting.voterInfo[accounts[1]].tokensBought).to.equal(10)
    })
  })
  
  
  it('should have a shrimpy symbol', async () => {
    // expect(await shrmp.symbol.call()).to.equal('SHRMP')
  })
})

async function newVoting () {
  const voting = await tryAsync(Voting.new())
  return voting
}

async function tryAsync (asyncFn) {
  try {
    return await asyncFn
  } catch (err) {
    console.error(err)
  }
}
