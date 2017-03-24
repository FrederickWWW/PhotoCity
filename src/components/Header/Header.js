import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Photo City</h1>
    <IndexLink to='/'/>
  </div>
)

export default Header
