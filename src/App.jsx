import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-gray-50">
        <Header />
      </div>
      <div className="bg-gray-50">
        <Outlet/>
      </div>
      
    </>
  );
};

export default App;
