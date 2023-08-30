import { useState } from 'react'
import './App.scss'
import { NavBar } from './components/nav-bar/navbar'


function UI({children}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {
        children
      }
    </>
  )
}

export default UI
