import React from "react";
import "./Card.css";

export default function Card({ items }) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5 my-10 ">
        {items.map((value) => (
          <div key={value.id}>
            <div className="card min-w-72 w-96 max-h-96 overflow-hidden text-justify bg-zinc-400 relative shadow-xl hover:transition-all delay-75 h-[40vh]">
              <figure>
                <img src={value.img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.place}</h2>
              </div>
              
                <button className="btn bg-green-300">Read More</button>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
