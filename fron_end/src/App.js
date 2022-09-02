import "./global.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Testimonial from "./pages/Testimonial/Testimonial";
import Gallery from "./pages/Gallery/Gallery";
import SouvenirsShop from "./pages/SouvenirsShop/SouvenirsShop";
import Activities from "./pages/Activities/Activities";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Account from "./pages/Account/Account";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import { imagesLogo } from "./pages/Home/imagesLogo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/souvenirsShop" exact>
            <SouvenirsShop />
          </Route>
          <Route path="/activities" exact>
            <Activities />
          </Route>
          <Route path="/testimonial" exact>
            <Testimonial />
          </Route>
          <Route path="/contactUs" exact>
            <ContactUs />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/account" exact>
            <Account />
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
