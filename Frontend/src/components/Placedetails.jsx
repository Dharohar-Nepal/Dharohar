import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";

export default function Placedetails() {
  const { id } = useParams();

  const [place, setPlace] = useState(null);

  useEffect(() => {
    console.log("Data:", Data);
    console.log("ID from URL:", id);
    const numericId = parseInt(id, 10);
    console.log("Numeric ID:", numericId);

    const selectedPlace = Data.find((p) => p.id === numericId);
    console.log("Selected Place:", selectedPlace);

    setPlace(selectedPlace);
  }, [id]);

  return (
    <div>
      {place ? (
        <div>
          {
            <div className="flex items-center justify-center my-10">
              <div className="card w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-full text-justify relative shadow-xl hover:transition-all delay-75 hover:border-2 hover:border-orange-400">
                <figure>
                  <img
                    src={place.img}
                    alt=""
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-xl lg:text-2xl">
                    {place.place}
                  </h2>
                  <p className="text-sm lg:text-base">{place.location}</p>
                  <p className="text-sm lg:text-base">
                    {place.description_english}
                  </p>
                  <hr />
                  <p className="text-sm lg:text-base">
                    {place.description_nepali}
                  </p>
                  <button className="mt-4 p-2 bg-orange-400 text-white">
                    <Link to="/">Back To Home</Link>
                  </button>
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
