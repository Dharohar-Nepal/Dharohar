import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Articles from './pages/Articles'

export default function 
() {
  return (
    <>
    <Router >
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/contact' element= { <Element />} />
        <Route path='/explore' element= { <Explore />} />
        <Route path='/article' element= { <Articles />} />
      </Routes>
    </Router>
      
    </>
  )
}
