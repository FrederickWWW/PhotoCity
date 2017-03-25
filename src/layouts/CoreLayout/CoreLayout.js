import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Place from '../../routes/Place/components/Place'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    {/*<div className='core-layout__viewport'>*/}
      {/*{children}*/}
    {/*</div>*/}
    <Place />
  </div>
)

// CoreLayout.propTypes = {
//   children: React.PropTypes.element.isRequired
// }

export default CoreLayout
