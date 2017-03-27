/**
 * Created by Frederick on 2017-03-22.
 */

import { connect } from 'react-redux'
import Place from '../components/Place'
import { fetchPlace } from '../modules/place'

console.log("mapping state to props.........")

const mapDispatchToProps = () =>({
  fetchPlace
})

const mapStateToProps = (state) => ({
  place:state.place
})

console.log('show the state.place')


export default connect(mapStateToProps, mapDispatchToProps)(Place)
