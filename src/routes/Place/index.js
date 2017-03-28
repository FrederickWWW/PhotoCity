/**
 * Created by Frederick on 2017-03-22.
 */
import { injectReducer } from '../../store/reducers'


export default (store) => ({
  path:'',
  getComponent(nextState,cb){
    require.ensure([],(require) =>{
      console.log("Get Coomponent!!!!!!!!!!!!!")
      const Place = require('./containers/PlaceContainer').default
      const reducer = require('./modules/place').default
      injectReducer(store, { key:'place', reducer })
      cb(null,Place)
    })
  },

// 失败，路由注册在这没用
  // childRoutes:[
  //   CreatePlace(),
  // ],


  // getChildRoutes(nextState,cb){
  //   require.exsure([],(require) =>{
  //     console.log("GetChildRoutes Create place is working!!!!")
  //     const CreatePlace = require('./routes/CreatePlace').default
  //     cb(null,CreatePlace)
  //   })
  // }
})
