import React from "react";
const HomeScr = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black bg-opacity-60 rounded-xl w-1/2 mb-28 cursor-default">
        <p className="text-stone-300 text-2xl lg:text-6xl font-suse text-center pt-1 lg:pt-5 mt-2">
          Welcome to Byters!
        </p>
        <p className="text-stone-300 text-sm lg:text-2xl font-suse text-center p-4 lg:pt-4 lg:pb-8 lg:pl-5 lg:pr-5">
          Discover Byters through our photo collection. From candid moments to
          special events, this gallery highlights the essence of our group.
          Enjoy!
        </p>
      </div>
    </div>
  );
};
export default HomeScr;
