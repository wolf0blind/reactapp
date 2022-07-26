import React, { useState, Fragment } from "react";

import Testimoni from "../../component/Slider/Testimoni";
import Navbar from "./../../component/Navbar/Navbar";
import Reservation from "./../../component/Card/Reservation";
import FavoriteMenu from "../../component/Card/FavoriteMenu";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import ChooseMenu from "../../component/Card/ChooseMenu";
const Menu = (props) => {
  const chooseMenu = [
    {
      title: "Our Favorite Menu 1",
      price: 13,
      img: "./../images/favorite (1).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 2",
      price: 13,
      img: "./../images/favorite (2).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 3",
      price: 13,
      img: "./../images/favorite (3).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 4",
      price: 13,
      img: "./../images/favorite (4).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 5",
      price: 13,
      img: "./../images/favorite (5).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 6",
      price: 13,
      img: "./../images/favorite (6).jpg",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
  ];

  const favoriteMenu = [
    {
      title: "Our Favorite Menu 1",
      price: 13,
      img: "./../images/Image.png",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 2",
      price: 13,
      img: "./../images/Image-1.png",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 3",
      price: 13,
      img: "./../images/Image-2.png",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 4",
      price: 13,
      img: "./../images/Image-3.png",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 5",
      price: 13,
      img: "./../images/Image-4.png",
      detail: "Amet minim mollit non deserunt ullamco.",
    },
    {
      title: "Our Favorite Menu 6",
      price: 13,
      img: "./../images/Image-5.png",
      detail: "Amet minim mollit non deserunt ullamco.",
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
                <span className="color__yellow">Menu</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Menu
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
            <div className="text-center mb-4">
              <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair">
                Choose Your Menu
              </h2>
            </div>
            <ul
              class="wrapper__navtab-wrap nav nav-pills mb-5"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link medium font__size--20 text__20-1024 active"
                  id="pills-brunch-tab"
                  data-toggle="pill"
                  href="#pills-brunch"
                  role="tab"
                  aria-controls="pills-brunch"
                  aria-selected="true"
                >
                  Brunch
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link medium font__size--20 text__20-1024"
                  id="pills-lunch-tab"
                  data-toggle="pill"
                  href="#pills-lunch"
                  role="tab"
                  aria-controls="pills-lunch"
                  aria-selected="false"
                >
                  Lunch
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link medium font__size--20 text__20-1024"
                  id="pills-dinner-tab"
                  data-toggle="pill"
                  href="#pills-dinner"
                  role="tab"
                  aria-controls="pills-dinner"
                  aria-selected="false"
                >
                  Dinner
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-brunch"
                role="tabpanel"
                aria-labelledby="pills-brunch-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="row">
                      {chooseMenu.map((obj) => {
                        return (
                          <div className="col-sm-6 col-lg-4 mb-4">
                            <ChooseMenu obj={obj} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-lunch"
                role="tabpanel"
                aria-labelledby="pills-lunch-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="row">
                      {chooseMenu.map((obj) => {
                        return (
                          <div className="col-sm-6 col-lg-4 mb-4">
                            <ChooseMenu obj={obj} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-dinner"
                role="tabpanel"
                aria-labelledby="pills-dinner-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="row">
                      {chooseMenu.map((obj) => {
                        return (
                          <div className="col-sm-6 col-lg-4 mb-4">
                            <ChooseMenu obj={obj} />
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
            <Reservation />
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              Our Favorite Menu{" "}
            </h2>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-md-6">
                    {favoriteMenu.map((obj, i) => {
                      if (i < 3) {
                        return (
                          <div className="mb-4">
                            <FavoriteMenu data={obj} />
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="col-md-6">
                    {favoriteMenu.map((obj, i) => {
                      if (i >= 3 && i < 6) {
                        return (
                          <div className="mb-4">
                            <FavoriteMenu data={obj} />
                          </div>
                        );
                      }
                    })}
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

export default Menu;
