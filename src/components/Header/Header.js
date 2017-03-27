import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <div className="new-place">
      <Link to='/place/create'> 新建地点</Link>
    </div>
  </div>
)

export default Header
