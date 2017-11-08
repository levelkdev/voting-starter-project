/* global describe test expect beforeEach */

import { ShrimpCoin } from 'helpers/contracts'
/* import moment from 'moment'
import lkTestHelpers from 'lk-test-helpers'
import { web3 } from 'helpers/w3'

const { increaseTime, latestTime } = lkTestHelpers(web3)

const { accounts } = web3.eth */

describe('ShrimpCoin', () => {
  let shrmp
  beforeEach(async () => {
    shrmp = await newShrimpCoin()
  })
  test('should have a shrimpy symbol', async () => {
    expect(await shrmp.SYMBOL.call()).toBe('SHRMP')
  })
})

async function newShrimpCoin () {
  const shrmp = await tryAsync(ShrimpCoin.new())
  return shrmp
}

async function tryAsync (asyncFn) {
  try {
    return await asyncFn
  } catch (err) {
    console.error(err)
  }
}
