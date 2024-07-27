import React from 'react'
import roshan from '../assets/images/roshan.jpeg'

export default function Testimonials() {
  return (
    <>
      <div>
        <h1 className='font-bold text-3xl text-center text-zinc-500'>Testimonials</h1>

        <div className='flex justify-center gap-5 mb-10 flex-wrap'>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={roshan}
                alt="Shoes"
                className="rounded-xl  overflow-hidden" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dhiraj Pant</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={roshan}
                alt="Shoes"
                className="rounded-xl  overflow-hidden" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dhiraj Pant</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={roshan}
                alt="Shoes"
                className="rounded-xl  overflow-hidden" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dhiraj Pant</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={roshan}
                alt="Dhiraj Pant"
                className="rounded-xl  overflow-hidden" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dhiraj Pant</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
