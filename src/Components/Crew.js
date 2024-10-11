import muzammil from "../Assets/Crew/muzammil.jpg";
import ahmadog from "../Assets/Crew/ahmadog.jpg";
import ali from "../Assets/Crew/ali.jpg";
import talib from "../Assets/Crew/talib.jpg";
import huzaifa from "../Assets/Crew/huzaifa.jpg";
import ahmadsaleem from "../Assets/Crew/ahmadsaleem.jpg";
import sadeed from "../Assets/Crew/sadeed.jpg";
import zaim from "../Assets/Crew/zaim.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AnimatePage from "../Layout/AnimatedPage";

const Crew = () => {
  const history = useHistory();
  const currentPage =
    new URLSearchParams(window.location.search).get("page") || 1;
  const gridsPerPage = 3;

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

  const startIndex = (currentPage - 1) * gridsPerPage;
  const endIndex = startIndex + gridsPerPage;
  const currentGrids = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    const nextPage = parseInt(currentPage) + 1;
    history.push(`?page=${nextPage}`);
  };

  const handlePrevPage = () => {
    const prevPage = parseInt(currentPage) - 1;
    if (prevPage >= 1) {
      history.push(`?page=${prevPage}`);
    }
  };

  return (
    <AnimatePage key={currentPage}>
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
        {currentGrids.length === gridsPerPage && (
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
          className={`cursor-pointer grid scale-50 bottom-pic relative lg:bottom-10 lg:scale-100 lg:grid-cols-3 gap-14 bg-opacity-60 rounded-xl transition-opacity duration-500 ease-in-out max-w-6xl mx-auto`}
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
    </AnimatePage>
  );
};

export default Crew;
