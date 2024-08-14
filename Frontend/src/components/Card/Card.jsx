import React from "react";
import "./Card.css";

export default function Card({ items }) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5 my-10 ">
        {items.map((value) => (
          <div key={value.id}>
            <div className="card min-w-72 w-96 max-h-96 overflow-hidden text-justify relative shadow-xl hover:transition-all delay-75 h-[42vh] hover:border-2 hover:border-orange-400">
              <figure>
                <img src={value.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.place}</h2>
              </div>
              <button className="btn bg-orange-400">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
