/**
 * Created by Frederick on 2017/3/24.
 */
import React, {Component} from 'react'


export default class CreatePlace extends Component{

  componentWillMount(){
    this.firebaseRef = firebase.database().ref('place/places')
    this.firebaseRef.limitToFirst(8).on('value',  (dataSnapshot) => {
      let items = []
      dataSnapshot.forEach( (childSnapshot) => {
        let item = childSnapshot.val()
        item['.key'] = childSnapshot.key
        items.push(item)
      })
      this.setState({
        items:items
      })
    })
  }

  componentWillUnmount(){
    this.firebaseRef.off()
  }

  onChange(e){
    this.setState({title: e.target.value})
    // todo 好像有问题，component 不应该直接操作 state 吧？
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.props.title && this.props.title.trim().length !== 0){
      this.firebaseRef.push({
        title: this.props.title
      })
      //todo 好像不该 setState?
      this.setState({
        title:''
      })
    }
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


