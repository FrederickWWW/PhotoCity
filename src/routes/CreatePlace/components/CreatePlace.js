/**
 * Created by Frederick on 2017/3/24.
 */
import React, {Component} from 'react'


export default class CreatePlace extends Component{

  // componentWillUnmount(){
  //   this.firebaseRef.off()
  // }



  handleSubmit(e){


    const data={
      title:'abcdeeeee title'
    }

    this.firebaseRef = firebase.database().ref('place/places')

    if(this.firebaseRef){
      console.log("there is a firebaseRef")
      console.log(this.firebaseRef)
    } else {
      console.log("Fire base is not there...")
    }


    this.firebaseRef.push({
      title:data.title
    }).then(console.log("the title has been pushed...."))




    // let updates ={}
    // updates['/place/places' + newPlaceKey] = e
    //
    // return firebase.database().ref().update(updates)
    }



  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="title" placeholder="主题"/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}


