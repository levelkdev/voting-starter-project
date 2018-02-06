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
      await voting.buy({ value: ethAmount, from: accounts[1] })
    })

    it('should increment the sender tokens bought', async () => {
      expect((await voting.voterInfo(accounts[1]))[1].toNumber()).to.equal(10)
    })
  })
  
  describe('voteForCandidate', () => {
    beforeEach(async () => {
      await voting.buy({ value: ethAmount, from: accounts[1] })
      await voting.voteForCandidate("Mike", 4, { from: accounts[1] })
    })
    it('should increment the tokens for the candidate that got voted for', async () => {
      expect((await voting.totalVotesFor("Mike")).toNumber()).to.equal(4)
    })
  })
  
  describe('voterDetails', () => {
    beforeEach(async () => {
      await voting.buy({ value: ethAmount, from: accounts[1] })
      await voting.voteForCandidate("Mike", 2, { from: accounts[1] })
      await voting.voteForCandidate("Emily", 4, { from: accounts[1] })
    })
    it('should return tokens used per candidate by the voter', async () => {
      expect((await voting.voterDetails(accounts[1]))[0].toNumber()).to.equal(10)
      expect((await voting.voterDetails(accounts[1]))[1][0].toNumber()).to.equal(2)
      expect((await voting.voterDetails(accounts[1]))[1][1].toNumber()).to.equal(0)
      expect((await voting.voterDetails(accounts[1]))[1][2].toNumber()).to.equal(4)
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
