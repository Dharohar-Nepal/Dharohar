import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Articles from './pages/Articles'
import Chat from './pages/Chat'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'

export default function
  () {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/article' element={<Articles />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}
