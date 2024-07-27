import React from 'react'
import Category from '../components/Category'
import Testimonials from '../components/Testimonials'
import Search from '../components/Search'

export default function Home({items}) {
  return (
    <div>
      <Search />
      <Category items={items} />
      <Testimonials />
    </div>
  )
}
