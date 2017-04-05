/**
 * Created by Frederick on 2017/3/27.
 */
import { injectReducer } from '../../store/reducers'

export default (store) =>({
  path:'place/create',

  getComponent(nextState, cb){
    require.ensure([],(require)=>{
      const CreatePlace = require('./containers/CreatePlaceContainer').default

      const reducer = require('./modules/createPlace').default
      injectReducer(store, { key:'place', reducer})
      cb(null,CreatePlace)
    })
  }
})


