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
      return ref.on('child_added',snapshot=> {
      let newPost = snapshot.val()
      dispatch(receivePlace(newPost))

      console.log("show state: ")
      console.log(getState())
    }, error =>{
      console.log("show error....")
      console.log(error)
    })
  }
}



let availableId = 0
export const receivePlace = data =>({
  type:RECEIVE_DATA,
  payload:{
    id:availableId++,
    title:data.title
  }
})

export const actions = {
  receivePlace,
  fetchDb
}


const ACTION_HANDLERS = {
  [RECEIVE_DATA]:(state,action) => {
    return ({...state, places:state.places.concat(action.payload)})
  }
}

// --------
// Reducer
// --------
const initialState = {
  places:[{
    id:3,
    title:'cannot solve this?'
  }]
}

export default function (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
