/**
 * Created by Frederick on 2017/3/24.
 */
import React, {Component} from 'react'
import * as wilddog from 'wilddog'
import { getRef } from '../../../main'
import { Link }from 'react-router'

const ref = getRef('/place/places')

export default class CreatePlace extends Component{

  constructor(props){
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  state = {
    title: ''
  }

  handleChange = (e)=>{

    this.setState({
      title:e.target.value
    })
  }

  handleSubmit = e =>{


    let data = {
      img:"6566666",
      title: this.state.title.trim()
    }
    // this.props.addPlace(data)
    e.preventDefault()

    ref.push(data)
      .then(console.log("test data has been written....."))
      .catch("It's not been written!!!!!")

    this.redirect()

  }

  redirect(e){
    this.props.router.push('/place/create')
  }

  render(){


    const {places} = this.props
    return(
      <div>
        <div>
          <Link to="/">回到主页</Link>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text"
                 placeholder="标题"
                 value={this.state.title}
                 onChange={this.handleChange}/>
          <input type="submit" value="提交"/>
        </form>

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

CreatePlace.propTypes = {
  addPlace: React.PropTypes.func.isRequired,
}

