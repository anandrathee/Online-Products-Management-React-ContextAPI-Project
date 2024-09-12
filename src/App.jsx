import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {

  const {search, pathname} = useLocation()
  // console.log(search, pathname)
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {(pathname != "/" || search.length > 0) && <Link
        to="/"
        className="absolute ml-64 mt-2 rounded text-sm text-blue-500 border-blue-500 border-2 font-semibold px-6 py-2"
      >
        Home
      </Link> }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
