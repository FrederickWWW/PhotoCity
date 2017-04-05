/**
 * Created by Frederick on 2017/4/2.
 */

import { connect } from 'react-redux'
import CreatePlace from '../components/CreatePlace'
import { addPlace, addPlaceDb } from '../modules/createPlace'


const mapDispatchToProps = {
  addPlace,
  addPlaceDb
}

const mapStateToProps = (state) => ({
  places:state.place.places
})



export default connect(mapStateToProps, mapDispatchToProps)(CreatePlace)
