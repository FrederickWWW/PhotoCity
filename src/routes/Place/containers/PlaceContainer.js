/**
 * Created by Frederick on 2017-03-22.
 */

import { connect } from 'react-redux'

// 唯一的功能，跳转进去

import Place from '../components/Place'

const mapStateToProps = (state) => ({
  place: state.place
})

export default connect(mapStateToProps)(Place)
