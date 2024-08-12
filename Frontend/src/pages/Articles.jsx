import React, { useContext } from "react";
import { AppContext } from "../context/context";

export default function Articles() {
  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5">
        {articles.map((value) => (
          <div key={value.id}>
            <div className="card bg-base-100 min-w-72 w-96 max-h-96 overflow-hidden p-10 relative shadow-xl hover:opacity-50 hover:transition-all delay-75">
              <figure>
                <img src={value.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.title}</h2>
                <p>{value.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    
                  </button>
                </div>
              </div>
              <button className="hover:absolute hover:opacity-100 grid items-center">
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
