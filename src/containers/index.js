/**
 * Created by Frederick on 2017/4/4.
 */
if(process.env.NODE_ENV === 'production') {
  console.log("it's running prod.......")
  module.exports = require('./AppContainer.prod')

} else {
  console.log(" it's running dev")
  module.exports = require('./AppContainer.dev')
}
