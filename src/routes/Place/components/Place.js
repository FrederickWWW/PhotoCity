/**
 * Created by Frederick on 2017-03-22.
 */

import React, {Component} from 'react'
import Spinner from 'react-spinkit'
// import CreatePlace from './CreatePlace'

export default class Place extends Component {


  componentWillMount(){
    // const {fetchPlace} = this.props.place
    // fetchPlace()

  }

  render(){
    console.log(this.props)

    const {isFetching, places} = this.props.place

    return (
      <div>
        <div className="loading">
          { isFetching ?
            <Spinner spinnerName='chasing-dots' /> : ''
          }
        </div>
        <h1>Photo City</h1>
        {/*<div>*/}
          {/*<CreatePlace/>*/}
        {/*</div>*/}
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
  place: React.PropTypes.object.isRequired
}
