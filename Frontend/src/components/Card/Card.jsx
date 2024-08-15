import React, { useContext } from "react";
import "./Card.css";
import { Link } from 'react-router-dom';

export default function Card({ items }) {


  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5 my-10 ">
        {items.map((value) => (
          <div key={value.id}>
            <div className="card glass bg-base-300 min-w-72 w-96 max-h-96 overflow-hidden text-justify relative shadow-xl hover:transition-all h-[42vh] hover:border-2 hover:border-orange-400">
              <figure>
                <img src={value.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.place}</h2>
                <p>{value.location}</p>
              </div>

              <button className="btn bg-orange-400 hover:bg-orange-300">
                <Link to={`/card/${value.id }`}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
