import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

const NavBar = () => {
  return (
<BrowserRouter>
<Routes>
    <Route exact path='/' element={<Dashboard />}/>
</Routes>
</BrowserRouter>
  )
}

export default NavBar