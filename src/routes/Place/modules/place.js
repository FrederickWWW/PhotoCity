/**
 * Created by Frederick on 2017-03-22.
 */

'use strict'

import { getRef } from '../../../main'

const ref = getRef('/place/places')
const RECEIVE_DATA = 'RECEIVE_DATA'


export function fetchDb () {
  return (dispatch, getState) => {
      console.log("shoot, why it works here????")
      return ref.once('value',snapshot=> {
      let placeList = snapshot.val()
      dispatch(receivePlace(placeList))


      console.log("show placeList: ")
      console.log(placeList)
    }, error =>{
      console.log("show error....")
      console.log(error)
    })
  }
}



export const receivePlace = data =>({
  type:RECEIVE_DATA,
  payload:{
    places:data
  }
})

export const actions = {
  receivePlace,
  fetchDb
}


const ACTION_HANDLERS = {
  [RECEIVE_DATA]:(state,action) => {
    return ({...state, places:action.payload.places})
  }
}

// --------
// Reducer
// --------
const initialState = {
  places:[]
}

export default function (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
