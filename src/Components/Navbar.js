import React from "react";
import byters from "../Assets/byters.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black h-20 lg:h-24 flex justify-between items-center ">
      <div className="text-white font-suse text-4xl lg:text-5xl ml-6 lg:ml-16 cursor-pointer ">
        <NavLink to="/">
          <img src={byters} alt="byters" className="h-10 lg:h-14 inline" />
        </NavLink>
      </div>
      <div className="links font-suse text-white flex space-x-6 lg:space-x-10 mr-6 lg:mr-24 text-lg lg:text-2xl">
        <NavLink
          className="cursor-pointer hover:text-neutral-400 ease-in-out duration-300 border-b-2 border-transparent "
          activeClassName="border-b-2 border-neutral-400 text-neutral-300 !border-neutral-400"
          to="/crew"
        >
          Crew
        </NavLink>
        <a
          className="cursor-pointer hover:text-neutral-400 ease-in-out duration-300 border-b-2 border-transparent "
          href="https://instagram.com/byterrs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Instagram
        </a>
        <button className="cursor-pointer hover:text-neutral-400 ease-in-out duration-300">
          Gallery
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
