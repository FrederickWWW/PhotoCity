/**
 * Created by Frederick on 2017/3/27.
 */


export default (store) =>({
  path:'place/create',

  getComponent(nextState, cb){
    require.ensure([],(require)=>{
      const CreatePlace = require('./components/CreatePlace').default
      cb(null,CreatePlace)
    })
  }
})


