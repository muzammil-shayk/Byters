import React from "react";
import Navbar from "./Components/Navbar";
import HomeScr from "./Components/HomeScr";
import Crew from "./Components/Crew";
import { useSelector } from "react-redux";
import Background from "./Components/Background";

function App() {
  const isCrewActive = useSelector((state) => state.page.isCrewActive);
  const isHomeScreenActive = useSelector(
    (state) => state.page.isHomeScreenActive
  );

  return (
    <Background>
      <Navbar />
      <div className={`screen ${isHomeScreenActive ? "active" : ""}`}>
        <HomeScr />
      </div>
      <div className={`screen ${isCrewActive ? "active" : ""}`}>
        <Crew />
      </div>
    </Background>
  );
}

export default App;
