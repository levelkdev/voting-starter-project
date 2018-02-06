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
      // console.log(await voting.totalTokens())
      // console.log(ethAmount)
      // console.log(accounts[1])
      await voting.buy( { value: ethAmount, from: accounts[1]} )
    })

    it('should increment the sender tokens bought', async () => {
      expect((await voting.voterInfo(accounts[1]))[1].toNumber()).to.equal(10)
    })
  })
})

async function newVoting () {
  const voting = await tryAsync(Voting.new(1000, 1, ["Mike", "Chris", "Emily"]))
  return voting
}

async function tryAsync (asyncFn) {
  try {
    return await asyncFn
  } catch (err) {
    console.error(err)
  }
}
