import React from "react";
import byters from "../Assets/byters.png";
import { useDispatch } from "react-redux";
import { setCrewActive, setHomeScreenActive } from "../Store/index";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleCrew = () => {
    dispatch(setCrewActive(true));
    dispatch(setHomeScreenActive(false));
  };
  const handleHome = () => {
    dispatch(setHomeScreenActive(true));
    dispatch(setCrewActive(false));
  };
  return (
    <nav className="bg-black h-20 lg:h-24 flex justify-between items-center ">
      <div className="text-white font-suse text-4xl lg:text-5xl ml-6 lg:ml-16 cursor-pointer ">
        <button onClick={handleHome}>
          <img src={byters} alt="byters" className="h-10 lg:h-14 inline" />
        </button>
      </div>
      <div className="links font-suse text-white flex space-x-6 lg:space-x-10 mr-6 lg:mr-24 text-lg lg:text-2xl">
        <button
          onClick={handleCrew}
          className="cursor-pointer hover:text-neutral-400 ease-in-out duration-300"
        >
          Crew
        </button>
        <a
          className="cursor-pointer hover:text-neutral-400 ease-in-out duration-300"
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
