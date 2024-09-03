import React, { useState } from "react";
import muzammil from "../Assets/Crew/muzammil.jpg";
import ahmadog from "../Assets/Crew/ahmadog.jpg";
import ali from "../Assets/Crew/ali.jpg";
import talib from "../Assets/Crew/talib.jpg";
import huzaifa from "../Assets/Crew/huzaifa.jpg";
import ahmadsaleem from "../Assets/Crew/ahmadsaleem.jpg";
import sadeed from "../Assets/Crew/sadeed.jpg";
import zaim from "../Assets/Crew/zaim.jpg";

const Crew = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeClass, setFadeClass] = useState(""); // State to handle fade effect
  const gridsPerPage = 3;
  const totalGrids = 8; // Total number of grids
  const totalPages = Math.ceil(totalGrids / gridsPerPage); // Calculate total pages

  const handleNextPage = () => {
    setFadeClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      setCurrentPage((prevPage) =>
        prevPage === totalPages ? 1 : prevPage + 1
      );
      setFadeClass(""); // Reset fade class for next transition
    }, 500); // Match the duration of the fade-out animation
  };

  const handlePrevPage = () => {
    setFadeClass("fade-out"); // Trigger fade-out animation
    setTimeout(() => {
      setCurrentPage((prevPage) =>
        prevPage === 1 ? totalPages : prevPage - 1
      );
      setFadeClass(""); // Reset fade class for next transition
    }, 500); // Match the duration of the fade-out animation
  };

  const images = [
    { src: muzammil, position: "center", name: "M. Muzammil" },
    { src: talib, position: "top left", name: "Talib Ibrahim" },
    { src: zaim, position: "top", name: "Zaim Khan" },
    { src: ahmadsaleem, position: "bottom", name: "Ahmad Saleem" },
    { src: sadeed, position: "top", name: "M. Sadeed" },
    { src: ahmadog, position: "top", name: "Ahmad Saqib" },
    { src: ali, position: "top center", name: "M. Ali" },
    { src: huzaifa, position: "bottom center", name: "Huzaifa Arif" },
  ];

  // Calculate the range of grids to display on the current page
  const startIndex = (currentPage - 1) * gridsPerPage;
  const endIndex = startIndex + gridsPerPage;
  const currentGrids = images.slice(startIndex, endIndex);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full">
      {currentPage > 1 && (
        <button
          onClick={handlePrevPage}
          className="button-bg absolute left-4 !text-white w-12 bottom-1/2 transition-transform duration-300 hover:scale-125"
        >
          <span className="material-symbols-outlined text-4xl ml-3 mt-1">
            arrow_back_ios
          </span>
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={handleNextPage}
          className="button-bg absolute right-4 !text-white lg:w-12 lg:bottom-1/2 transition-transform duration-300 hover:scale-125"
        >
          <span className="material-symbols-outlined text-4xl ml-1 mt-1">
            arrow_forward_ios
          </span>
        </button>
      )}
      <div
        className={`cursor-pointer grid scale-50 bottom-pic relative lg:bottom-10 lg:scale-100 lg:grid-cols-3 gap-14 bg-opacity-60 rounded-xl transition-opacity duration-500 ease-in-out ${fadeClass} max-w-6xl mx-auto`}
      >
        {currentGrids.map((image, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 rounded-xl flex flex-col items-center justify-center overflow-hidden w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover rounded-xl"
              style={{ objectPosition: image.position }}
            />
            <div className="mt-2 text-white text-lg font-bold text-center font-suse pb-2">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
