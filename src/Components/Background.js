import React from "react";
import background from "../Assets/background.jpg";

const Background = ({ children }) => {
  return (
    <div className="relative h-screen lg:overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src={background}
        alt="byters"
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
