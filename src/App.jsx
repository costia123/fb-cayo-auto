import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Screens
import Home from "screens/Home";
import Catalogue from "screens/catalogue";
import Contact from "screens/contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
