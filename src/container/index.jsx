import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./homepage/index";
import About from "./homepage/About";
import Menu from "./homepage/Menu";
import Reservation from "./homepage/Reservation";
import Contact from "./homepage/Contact";
import Newslatter from "./homepage/Newslatter";
import Gallery from "./homepage/Gallery";
import Testimonial from "./homepage/Testimonial";
import ProductDetail from "./homepage/ProductDetail";
import DetailBlock from "./homepage/DetailBlog";
import Cart from "./homepage/Cart";
import Checkout from "./homepage/Checkout";
import Faq from "./homepage/Faq";
import MeetChef from "./homepage/MeetChef";

const Index = (props) => {
  return (
    <Fragment>
      <Router forceRefresh>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newslatter">
            <Newslatter />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail />
          </Route>
          <Route exact path="/detail-blog">
            <DetailBlock />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/meet-our-chef">
            <MeetChef />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
