import React from 'react'
import ToggleTheme from './toggleTheme/ToggleTheme'
import "./AllComponents.css"
import ToggleButtonCss from './toggleButtonCss.jsx/ToggleButtonCss'

const AllComponents = () => {
  return (
    <div className=''>
      hi i m all components
      <ToggleTheme/>
      <ToggleButtonCss/>
    </div>
  )
}

export default AllComponents
