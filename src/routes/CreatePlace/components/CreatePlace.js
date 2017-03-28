/**
 * Created by Frederick on 2017/3/24.
 */
import React, {Component} from 'react'



export default class CreatePlace extends Component{

  componentWillMount(){
    // const {fetchPlace} = this.props.place
    // todo fetchPlace()
  }

  componentWillUnmount(){
    this.firebaseRef.off()
  }

  onChange(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(){
    e.preventDefault()
    //todo if this.state.title && blahblahblah, push to firebase
    // todo setState to null
  }


  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.props.title} type="text" name="title" placeholder="主题"/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}


