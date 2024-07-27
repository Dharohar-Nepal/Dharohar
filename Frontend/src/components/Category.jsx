import React from 'react'
import Card from './Card';

export default function Category() {  

  return (
    <>
      <div className='my-10'>
        <div>
          <ul className='flex justify-center items-center gap-5 cursor-pointer'>
            <li>Natural</li>
            <li>Religious</li>
            <li>Historical</li>
          </ul>
        </div>

        <div>
          <Card items={items}/>
        </div>
      </div>
    </>
  )
}
