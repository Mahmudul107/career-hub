import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
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
