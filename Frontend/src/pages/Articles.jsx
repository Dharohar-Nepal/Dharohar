import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { useCollapse } from "react-collapsed";

export default function Articles() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const { articles } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center items-center flex-col flex-wrap gap-5 m-10">
        {articles.map((value) => (
          <div key={value.id}>
            <div className="w-full flex flex-col items-center overflow-hidden shadow-xl">
              <div className="">
                <figure>
                  <img src={value.img} alt="Photo" className="w-[40vw] h-auto" />
                </figure>
              </div>
              <div className=" w-[40vw] text-justify">
                <h2 className="card-title font-bold">{value.title}</h2>
                <p>{value.short}</p>
                <section {...getCollapseProps()}>{value.description}</section>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    {...getToggleProps({
                      onClick: () =>
                        setExpanded((prevExpanded) => !prevExpanded),
                    })}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
