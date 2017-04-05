/**
 * Created by Frederick on 2017-03-22.
 */

import React, {Component, PropTypes} from 'react'
import Spinner from 'react-spinkit'

export default class Place extends Component {

  componentWillMount(){
    const fetchDb = this.props.fetchDb
    fetchDb()
  }

  render(){
    const {places} = this.props.place
    const {fetchDb} = this.props


    return (
      <div>
        <div className="loading">

            <Spinner spinnerName='chasing-dots' />

        </div>
        <h1>Photo City</h1>

        <div className="place-list">
          { places.map((item) => (

            <div key={item.id}>
              {/*<img src={item.img}/>*/}
              <h3>{item.title}</h3>
            </div>
            ))}
        </div>
      </div>
    )
  }

}

Place.propTypes = {
  places: React.PropTypes.array,
  fetchDb:React.PropTypes.func.isRequired


}
