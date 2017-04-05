/**
 * Created by Frederick on 2017/4/2.
 */

const ADD_PLACE = 'ADD_PLACE'


// Actions

let availableId = 0
export const addPlace = (value) => ({
  type: ADD_PLACE,
  payload:{
    title:value,
    id:availableId++
  }

})

export const actions = {
  addPlace
}

//Action Handlers

const ACTION_HANDLERS = {
  [ADD_PLACE]:(state,action) => {

    return ({...state, places:state.places.concat(action.payload)})
  }
}



// Reducers
const initialState = {
  places: []
}


export default function (state = initialState, action) {

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
