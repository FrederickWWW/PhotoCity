/**
 * Created by Frederick on 2017/4/4.
 */
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./AppContainer.prod')

} else {
  module.exports = require('./AppContainer.dev')
}
