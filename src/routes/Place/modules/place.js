/**
 * Created by Frederick on 2017-03-22.
 */
const RECEIVE_PLACE = 'RECEIVE_PLACE'
const REQUEST_PLACE = 'REQUEST_PLACE'


console.log("module of place@@!@!@!@!@!@!@")

function requestPlace() {
  return {
    type: REQUEST_PLACE
  }
}

export function receivePlace (items){
  return {
    type: RECEIVE_PLACE,
    payload:{
      places:items
    }
  }
}


export function fetchPlace() {
  return (dispatch, getState) => {
    if (getState().place.isFetching) return

    dispatch(requestPlace())
    return fetch('lalala') // todo
      .then(data => dispatch(receivePlace(data)))
  }
}

const ACTION_HANDLERS = {
  [REQUEST_PLACE]: (state) => {
    return ({...state, isFetching: true})
  },
  [RECEIVE_PLACE]:(state, action) => {
    return ({...state, isFetching: false, places:state.place.concat(action.payload)})
  }

}


// --------
// Reducer
// --------
const initialState = {
  isFetching:true,
  places:[{'id':'1','title':'it is finally here!'},{'id':'2','title':'nononono!'}]
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
