import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import SliderFooter from "../Slider/SliderFooter";

const Footer = (props) => {
  return (
    <Fragment>
      <section
        className={
          "pt-0 section__footer pb-0 " + (props.class ? props.class : "")
        }
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h5
              exact
              class="navbar-brand font__size--24 text__24-1024 text__24-sm playfair bold mb-0 "
            >
              Resto<span className="color__yellow">Q</span>
            </h5>

            <ul className="list__sosmed">
              <li>
                <a href="#!">
                  <img src="./../images/icon (1).png" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="./../images/icon (3).png" alt="" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="./../images/icon (2).png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="hr__line my-5" />
          <div className="row">
            <div className="mb-4 mb-lg-0 col-sm-6 order-md-1 order-2 col-md">
              <h5 className="medium font__size--14 text__14-1024 mb-4">
                Contact
              </h5>
              <ul className="list__menu">
                <li>
                  <div className="d-flex">
                    <img
                      src="./../images/Call.png"
                      className="object-fit-content mr-3"
                      alt=""
                    />
                    <span className="normal font__size--12 text__12-1024 color__gray-1 d-inline-block">
                      +62 424 954 824
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img
                      src="./../images/Message.png"
                      className="object-fit-content mr-3"
                      alt=""
                    />
                    <span className="normal font__size--12 text__12-1024 color__gray-1 d-inline-block">
                      your.email.inbox@here.com
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <img
                      src="./../images/location (3) 1.png"
                      className="object-fit-content mr-3"
                      alt=""
                    />
                    <span className="normal font__size--12 text__12-1024 color__gray-1 d-inline-block">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 order-1 order-md-2 col-md">
              <h5 className="medium font__size--14 text__14-1024 mb-4">
                About Us
              </h5>
              <p className="normal font__size--12 text__12-1024 color__gray-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita repudiandae neque illum aspernatur fugiat maiores id
                magni, modi, quaerat vitae. Consectetur adipisicing elit.
              </p>
            </div>
            <div className="mb-4 mb-lg-0 col-sm-6 order-3 col-md-2">
              <h5 className="medium font__size--14 text__14-1024 mb-4">
                Quicklink
              </h5>
              <ul className="list__menu">
                <li>
                  <NavLink
                    to="/"
                    className="meidum font__size--12 text__12-1024 color__gray-1"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="meidum font__size--12 text__12-1024 color__gray-1"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reservation"
                    className="meidum font__size--12 text__12-1024 color__gray-1"
                  >
                    Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className="meidum font__size--12 text__12-1024 color__gray-1"
                  >
                    Menu
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 class="medium font__size--14 text__14-1024 mb-0">
                  Gallery
                </h5>

                <NavLink
                  to="/gallery"
                  className="medium font__size--12 text__12-1024 color__yellow"
                >
                  SEE MORE
                </NavLink>
              </div>

              <SliderFooter />
            </div>
          </div>

          <hr className="hr__line mb-0 mt-5" />
        </div>
        <div className="bottom text-center normal font__size--12 text__12-1024 color__gray-1 py-4">
          <div className="container">
            Copyright Vagency. 2021 All Right Reserved
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
