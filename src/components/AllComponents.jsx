import React, { useState } from 'react'
import ToggleTheme from './toggleTheme/ToggleTheme'
import "./AllComponents.css"
import ToggleButtonCss from './toggleButtonCss.jsx/ToggleButtonCss'
import { counterContext } from '../context/context'
import TestUseReducer from './testReducer/TestUseReducer'


const AllComponents = () => {
const [ count,setCount ] = useState('hello g')

const changeInnerText = () =>{
  setCount('world g')
}

  return (
    <>
    <counterContext.Provider value = {{count , changeInnerText}}>
    <div>
      hi i m all components
      <ToggleTheme/>
      <ToggleButtonCss/>
      <TestUseReducer/>
  
    </div>
    </counterContext.Provider>
    </>
  )
}

export default AllComponents
