import React from 'react'

export default function Search() {
    return (
        <>
            <div className="join flex items-center justify-center my-5">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search" />
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn join-item bg-orange-400">Search</button>
                </div>
            </div>
        </>
    )
}
