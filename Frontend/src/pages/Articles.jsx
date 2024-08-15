import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { useCollapse } from "react-collapsed";

export default function Articles() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const { articles } = useContext(AppContext);

  return (
    <>
      {/* <div className="flex justify-center items-center flex-wrap gap-5 m-10">
        {articles.map((value) => (
          <div key={value.id}>
            <div className="w-full flex overflow-hidden max-h-[40vh] shadow-xl">
              <div className="w-1/2 max-h-[40vh] ">
                <figure>
                  <img src={value.img} alt="Photo" className="w-full h-auto" />
                </figure>
              </div>
              <div className="card-body w-1/2 text-justify">
                <h2 className="card-title font-bold">{value.title}</h2>
                <p>{value.description}</p>
                <section {...getCollapseProps()}>Collapsed content 🙈</section>
                <div className="card-actions justify-end">
                  <button
      className="btn btn-primary"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      
    </>
  );
}
