import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import { NavLink } from "react-router-dom";
const Gallery = (props) => {
  const menu = [
    {
      img: "./../images/img (1).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (2).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (3).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (4).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (5).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (6).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (7).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
    {
      img: "./../images/img (8).jpg",
      type: "DESSERT",
      name: "Elote Style Quinoa Salad",
    },
  ];
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="bg__black position-relative">
          <img
            src="./../images/New Project (1) 1.png"
            className="path__1"
            alt=""
          />
          <div className="position-relative z-2">
            <Navbar />
            <div className="container">
              <h5 className="mb-0 color__white normal font__size--16 text__16-1024">
                <span className="opacity__6">Home</span> {" > "}
                <span className="color__yellow">Gallery</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Gallery
                  </h1>
                  <p className="normal font__size--16 text__16-1024 color__white">
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <br className="d-none d-md-block" /> aliqua dolor do amet
                    sint
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="pb-0">
          <div className="container">
            <div className="wrapper__res-line mb-5">
              <ul
                class="wrapper__navtab-wrap nav nav-pills"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item mb-4 mb-sm-0">
                  <a
                    class="nav-link medium font__size--20 text__20-1024 active"
                    id="pills-all-tab"
                    data-toggle="pill"
                    href="#pills-all"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    All
                  </a>
                </li>
                <li class="nav-item mb-4 mb-sm-0">
                  <a
                    class="nav-link medium font__size--20 text__20-1024"
                    id="pills-drinks-tab"
                    data-toggle="pill"
                    href="#pills-drinks"
                    role="tab"
                    aria-controls="pills-drinks"
                    aria-selected="false"
                  >
                    Drinks
                  </a>
                </li>
                <li class="nav-item mb-4 mb-sm-0">
                  <a
                    class="nav-link medium font__size--20 text__20-1024"
                    id="pills-Dishes-tab"
                    data-toggle="pill"
                    href="#pills-Dishes"
                    role="tab"
                    aria-controls="pills-Dishes"
                    aria-selected="false"
                  >
                    Dishes
                  </a>
                </li>
                <li class="nav-item mb-4 mb-sm-0">
                  <a
                    class="nav-link medium font__size--20 text__20-1024"
                    id="pills-Dessert-tab"
                    data-toggle="pill"
                    href="#pills-Dessert"
                    role="tab"
                    aria-controls="pills-Dessert"
                    aria-selected="false"
                  >
                    Dessert
                  </a>
                </li>
              </ul>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-all"
                    role="tabpanel"
                    aria-labelledby="pills-all-tab"
                  >
                    <div className="row">
                      {menu.map((obj) => {
                        return (
                          <div className="col-md-6 mb-4">
                            <div className="wrapper__cart-menu position-relative">
                              <img src={obj.img} className="img" alt="" />
                              <div className="bg"></div>
                              <div className="desc">
                                <p className="medium font__size--20 text__20-1024 color__white mb-0">
                                  {obj.type}
                                </p>
                                <NavLink
                                  to="/product-detail"
                                  className="bold d-inline-block w-100 playfair font__size--32 text__32-1024 color__white mb-0"
                                >
                                  {obj.name}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-drinks"
                    role="tabpanel"
                    aria-labelledby="pills-drinks-tab"
                  >
                    <div className="row">
                      {menu.map((obj) => {
                        return (
                          <div className="col-md-6 mb-4">
                            <div className="wrapper__cart-menu position-relative">
                              <img src={obj.img} className="img" alt="" />
                              <div className="bg"></div>
                              <div className="desc">
                                <p className="medium font__size--20 text__20-1024 color__white mb-0">
                                  {obj.type}
                                </p>
                                <h5 className="bold playfair font__size--32 text__32-1024 color__white mb-0">
                                  {obj.name}
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-Dishes"
                    role="tabpanel"
                    aria-labelledby="pills-Dishes-tab"
                  >
                    <div className="row">
                      {menu.map((obj) => {
                        return (
                          <div className="col-md-6 mb-4">
                            <div className="wrapper__cart-menu position-relative">
                              <img src={obj.img} className="img" alt="" />
                              <div className="bg"></div>
                              <div className="desc">
                                <p className="medium font__size--20 text__20-1024 color__white mb-0">
                                  {obj.type}
                                </p>
                                <h5 className="bold playfair font__size--32 text__32-1024 color__white mb-0">
                                  {obj.name}
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-Dessert"
                    role="tabpanel"
                    aria-labelledby="pills-Dessert-tab"
                  >
                    <div className="row">
                      {menu.map((obj) => {
                        return (
                          <div className="col-md-6 mb-4">
                            <div className="wrapper__cart-menu position-relative">
                              <img src={obj.img} className="img" alt="" />
                              <div className="bg"></div>
                              <div className="desc">
                                <p className="medium font__size--20 text__20-1024 color__white mb-0">
                                  {obj.type}
                                </p>
                                <h5 className="bold playfair font__size--32 text__32-1024 color__white mb-0">
                                  {obj.name}
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <Subscribe />
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Gallery;
