import React from "react";
import Layout from "./Layout/Layout";
import HomeScr from "./Components/HomeScr";
import Crew from "./Components/Crew";
import Background from "./Components/Background";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatePage from "./Layout/AnimatedPage";

function App() {
  const location = useLocation();

  return (
    <Background>
      <Layout>
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <AnimatePage>
                <HomeScr />
              </AnimatePage>
            </Route>
            <Route path="/crew">
              <AnimatePage>
                <Crew />
              </AnimatePage>
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </AnimatePresence>
      </Layout>
    </Background>
  );
}

export default App;
