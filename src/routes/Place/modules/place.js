/**
 * Created by Frederick on 2017-03-22.
 */
const RECEIVE_PLACE = 'RECEIVE_PLACE'
const REQUEST_PLACE = 'REQUEST_PLACE'

function requestPlace() {
  return {
    type: REQUEST_PLACE
  }
}

export function receivePlace (items){
  return {
    type: RECEIVE_PLACE,
    payload:{
      items:items
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
