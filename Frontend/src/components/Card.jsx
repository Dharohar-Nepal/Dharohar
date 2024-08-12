import React from "react";

export default function Card({ items }) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5">
        {items.map((value) => (
          <div key={value.id}>
            <div className="card bg-base-100 min-w-72 w-96 max-h-96 overflow-hidden p-10 relative shadow-xl hover:opacity-50 hover:transition-all delay-75">
              <figure>
                <img src={value.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.place}</h2>
                <p>{value.description_english}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    Translate Into Nepali
                  </button>
                </div>
              </div>
              <button className="hover:absolute hover:opacity-100 grid items-center">
                Readmore
              </button>
            </div>
          </div>
        ))}
      </div> 
    </>
  );
}
