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
    var items = [];
    // console.log("show the places we've got: ", places)
    // console.log(Array.isArray(places))
    for(let item in places){
      console.log("item is: " + item)

      if(places.hasOwnProperty(item) && places[item]){
        places[item][key] = item
        items.push(places[item])
      }
    }

    console.log(items,"------------")



    return (
      <div>
        <div className="loading">

            <Spinner spinnerName='chasing-dots' />

        </div>
        <h1>Photo City</h1>

        <div className="place-list">

          {/*{items}*/}
          {/*{ items.map((item, index) => (*/}

            {/*<div key={index}>*/}
              {/*/!*<img src={item.img}/>*!/*/}
              {/*<h3>{item.value.title}</h3>*/}
            {/*</div>*/}
            {/*))}*/}
        </div>
      </div>
    )
  }

}

Place.propTypes = {
  places: React.PropTypes.array,
  fetchDb:React.PropTypes.func.isRequired


}
