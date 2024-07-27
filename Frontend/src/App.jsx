import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Articles from './pages/Articles'
import Chat from './pages/Chat'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Data from './Data'
import Card from './components/Card'

export default function
  () {

    const [items, setItems] = useState(Data)

  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home items={items}/>} />
          <Route path='/card' element={<Card  />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/article' element={<Articles />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}
