import React, { useContext } from "react";
import { AppContext } from "../context/context";

export default function Articles() {
  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5 m-10">
        {articles.map((value) => (
          <div key={value.id}>
            <div className="w-full flex overflow-hidden max-h-[40vh] shadow-xl">
              <div className="w-1/2 max-h-[40vh] ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="w-full h-auto"
                  />
                </figure>
              </div>
              <div className="card-body w-1/2 text-justify">
                <h2 className="card-title font-bold">{value.title}</h2>
                <p>{value.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
