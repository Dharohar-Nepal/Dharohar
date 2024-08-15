import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/dharohar.png";
import { FaUser } from "react-icons/fa";


export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a href="https://dharohar.streamlit.app/">Explore</a>
              </li>
              <li>
                <Link to={"/articles"}>Articles</Link>
              </li>
              <li>
                <a href="https://dharohar-bot.streamlit.app/">Chat</a>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <img src={Logo} alt="Logo" className="w-[140px]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-orange-400 rounded-xl">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:bg-orange-400 rounded-xl">
              <a href="https://dharohar.streamlit.app/">Explore</a>
            </li>
            <li className="hover:bg-orange-400 rounded-xl">
              <Link to={"/articles"}>Articles</Link>
            </li>
            <li className="hover:bg-orange-400 rounded-xl">
              <a href="https://dharohar-bot.streamlit.app/">Chat</a>
            </li>
            <li className="hover:bg-orange-400 rounded-xl">
              <Link to={"./about"}>About</Link>
            </li>
            <li className="hover:bg-orange-400 rounded-xl">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
           < FaUser className="text-2xl cursor-pointer"/> 
        </div>
      </div>
    </>
  );
}
