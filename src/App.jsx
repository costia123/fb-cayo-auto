import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Screens
import Home from "screens/Home";
import Catalogue from "screens/catalogue";
import Contact from "screens/contact";

import { useDispatch, useSelector } from "react-redux";
import { getStrapiCar, getStrapiCat } from "redux/strapi/action";

function App() {
  const strapi = useSelector(state => state.strapi)
	const dispatch = useDispatch()
	useEffect(() => {
        if (!strapi.StrapriCar) {
            dispatch(getStrapiCar());
			dispatch(getStrapiCat())
        }
    }, [strapi]);
    
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
