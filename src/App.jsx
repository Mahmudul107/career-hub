import React from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  // const loc = useLocation()
  //   console.log(loc);
  return (
    <>
      <div className="bg-gray-100">
        <Header />
      </div>
      <div>
        <Outlet/>
      </div>
      
    </>
  );
};

export default App;
