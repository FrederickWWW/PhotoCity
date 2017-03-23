/**
 * Created by Frederick on 2017-03-22.
 */

import React, {Component} from 'react'
import Spinner from 'react-spinkit'

export default class Place extends Component {
  render(){
    const { place:{ fetching, places }} = this.props

    return (
      <div>
        <div className="loading">
          { fetching ?
            <Spinner spinnerName='chasing-dots' /> : ''
          }
        </div>
        <div className="place-list">
          { places.map(item => (

            <div key={item.id}>
              <img src={item.img}/>
              <h3>{item.title}</h3>
            </div>




            ))}
        </div>
      </div>
    )
  }

}

Place.propTypes = {
  place: React.PropTypes.object.isRequired
}
