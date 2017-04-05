/**
 * Created by Frederick on 2017-03-22.
 */
import { injectReducer } from '../../store/reducers'


export default (store) => ({
  path:'',
  getComponent(nextState,cb){
    require.ensure([],(require) =>{
      const Place = require('./containers/PlaceContainer').default
      const reducer = require('./modules/place').default
      injectReducer(store, { key:'place', reducer })
      cb(null,Place)
    })
  },
})
