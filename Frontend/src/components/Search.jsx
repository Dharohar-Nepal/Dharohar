import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/context";

export default function Search() {
  const { item } = useContext(AppContext); // Correctly access `item` from context
  const [filter, setFilter] = useState(item);

  const searchPlace = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilter(item);
    } else {
      const filters = item?.filter((p) =>
        p.place.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilter(filters);
    }
  };

  useEffect(() => {
    setFilter(item); // Update filter whenever the `item` changes
  }, [item]);

  return (
    <>
      <div className="join flex items-center justify-center my-5">
        <div>
          <div>
            <input
              onChange={searchPlace}
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item bg-orange-400">Search</button>
        </div>
      </div>
      {/* <div>
        {filter?.map((data, index) => (
          <div key={index}>
            <div className="flex justify-center items-center flex-wrap gap-5 my-10 ">
              {item?.map((value) => (
                <div key={value.id}>
                  <div className="card min-w-72 w-96 max-h-96 overflow-hidden text-justify relative shadow-xl hover:transition-all delay-75 h-[42vh] hover:border-2 hover:border-orange-400">
                    <figure>
                      <img src={value.img} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{value.place}</h2>
                      <p>{value.location}</p>
                    </div>
                    <button className="btn bg-orange-400 hover:bg-orange-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
