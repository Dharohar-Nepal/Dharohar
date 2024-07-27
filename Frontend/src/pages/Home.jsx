import React, { useState } from 'react'
import Category from '../components/Category'
import Testimonials from '../components/Testimonials'
import Search from '../components/Search'


const Home = () => {
  return (
    <>
      <div>
        <Search />
        <Category />
        <Testimonials />
      </div>
    </>
  )
}

export default Home