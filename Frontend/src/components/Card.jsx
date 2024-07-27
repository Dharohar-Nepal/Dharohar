import React from 'react'

export default function Card({ items }) {
    return (
        <>
            {
                items.map((value) => {
                    <div key={value.id} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{items.place}</h2>
                            <p>{items.description_nepali}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Translate Into Nepali</button>
                            </div>
                        </div>
                    </div>
                })
            }

        </>
    )
}
