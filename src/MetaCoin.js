import _ from 'lodash'
import requireContract from './requireContract'

module.exports = (opts) => {
  const MetaCoin = requireContract('MetaCoin', opts)

  return _.assign(
    _.assign({}, MetaCoin),
    {
      new: async () => {
        return await MetaCoin.new()
      }
    }
  )
}
