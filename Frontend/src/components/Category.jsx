import Card from './Card';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/context';

export default function Category() {

  const { item } = useContext(AppContext);
  const [filter, setFilter] = useState(item)

  const filteredData = (category) => {

    const filteredItems = item.filter((p) => p.category === 'category'      
      setFilter(filteredItems)
    )
  }
  console.log(filteredData)

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
          <Card />
        </div>
      </div>
    </>
  )
}
