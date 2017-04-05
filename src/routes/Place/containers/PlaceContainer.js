/**
 * Created by Frederick on 2017-03-22.
 */

import { connect } from 'react-redux'
import Place from '../components/Place'
import {fetchDb} from '../modules/place'



// const mapDispatchToProps = () =>({
//   fetchDb
// })

const mapDispatchToProps = {
  fetchDb
}

const mapStateToProps = (state) => ({
  place:state.place
})



export default connect(mapStateToProps, mapDispatchToProps)(Place)
