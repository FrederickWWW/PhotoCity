/**
 * Created by Frederick on 2017/3/24.
 */
import React, {Component} from 'react'

export default class CreatePlace extends Component{
  render(){
    return(
      <div>
        <form>
          <input type="text" name="title" placeholder="主题"/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}


