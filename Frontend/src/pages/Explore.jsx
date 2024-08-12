import React from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <>
    <div className="flex justify-center">

      <button className="bg-zinc-400 p-3 rounded-lg m-10">
        <Link to='https://dharohar.streamlit.app/' target="blank">Explore</Link>
      </button>
    </div>
    </>
  );
}
