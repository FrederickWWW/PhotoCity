/**
 * Created by Frederick on 2017-03-22.
 */

import { connect } from 'react-redux'
import Place from '../components/Place'

console.log("PlaceContainerrrrrrrrrrrrrrrrrr......")

const mapDispatchToProps = () =>({

})

const mapStateToProps = (state) => ({
  place: state.place
})
console.log('show the state.place')
console.log(state.place)
export default connect(mapStateToProps,mapDispatchToProps)(Place)
