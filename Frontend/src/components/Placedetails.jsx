import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";

export default function Placedetails() {
  const { id } = useParams();

  // Log id and its type for debugging
  console.log("useParams id:", id, "Type:", typeof id);

  const [place, setPlace] = useState(null);

  useEffect(() => {
    const numericId = parseInt(id, 10);

    const selectedPlace = Data.find((p) => p.id === numericId);

    setPlace(selectedPlace || {});
  }, [id]);

  return (
    <div>
      {place ? (
        <div>
          {
            /* <h1>{place.place}</h1>
          <p>{place.location}</p>
          <img src={place.img} alt={place.place} /> */

            <div className="flex items-center justify-center my-10">
              <div className="card min-w-72 w-1/2 max-w-full h-full text-justify relative shadow-xl hover:transition-all delay-75  hover:border-2 hover:border-orange-400">
                <figure>
                  <img src={place.img} alt=""  className="w-auto h-40vh"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{place.place}</h2>
                  <p>{place.location}</p>
                  <p>{place.description_english}</p>
                  <hr />
                  <hr />
                  <p>{place.description_nepali} </p>

                  <button><Link to={'/'}>Back To Home</Link> </button>
                </div>
              </div>
              
            </div>
            
          }
        </div>
      ) : (
        <p>Place not found</p>
      )}
    </div>
  );
}
