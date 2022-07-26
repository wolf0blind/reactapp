import React, { useState, Fragment } from "react";

import Testimoni from "../../component/Slider/Testimoni";
import Navbar from "./../../component/Navbar/Navbar";
import Reservation from "./../../component/Card/Reservation";
import FavoriteMenu from "../../component/Card/FavoriteMenu";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
const About = (props) => {
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
                <span className="color__yellow">About Us</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    About Us
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
            <div className="text-center">
              <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-4">
                Our Restaurant has been present{" "}
                <br className="d-none d-lg-block" /> for 10 years in the market.{" "}
              </h2>
              <p className="normal font__size--16 text__16-1024 color__gray-1 mb-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis{" "}
                <br className="d-none d-lg-block" /> enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="wrapper__video position-relative">
                <img
                  src="./../images/Group 10 (1).png"
                  className="play pointer"
                  alt=""
                />
                <img
                  src="./../images/Rectangle 3.png"
                  className="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section__choose py-0">
          <div className="container position-relative">
            <div className="wrapper__line-grid">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="position-relative z-2">
              <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
                Why People Choose Us
              </h2>

              <div className="row justify-content-center">
                <div className="col-md-11 col-xl-9">
                  <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__choose text-center">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/vegetarian (1).png" alt="" />
                        </div>
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm playfair mb-2">
                          Always Fresh Ingredient
                        </h5>
                        <p className="normal font__size--14 text__14-1024 color__gray-1">
                          Amet minim mollit non deserunt ullamco{" "}
                          <br className="d-none d-xl-block" /> est sit aliqua
                          dolor do amet sint.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__choose text-center mt__5-md">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/chef.png" alt="" />
                        </div>
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm playfair mb-2">
                          Specialist Chef
                        </h5>
                        <p className="normal font__size--14 text__14-1024 color__gray-1">
                          Amet minim mollit non deserunt ullamco{" "}
                          <br className="d-none d-xl-block" /> est sit aliqua
                          dolor do amet sint.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wrapper__choose text-center">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/food-tray.png" alt="" />
                        </div>
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm playfair mb-2">
                          Menu for every taste
                        </h5>
                        <p className="normal font__size--14 text__14-1024 color__gray-1">
                          Amet minim mollit non deserunt ullamco{" "}
                          <br className="d-none d-xl-block" /> est sit aliqua
                          dolor do amet sint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <Reservation />
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              Meet Our Master Chef
            </h2>

            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row justify-content-center">
                  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="wrapper__chef text-center">
                      <img
                        src="./../images/Rectangle 6.png"
                        className="img mb-4"
                        alt=""
                      />
                      <h4 className="bold font__size--24 text__24-1024 text__24-sm playfair">
                        Brooklyn Simmons
                      </h4>
                      <p className="normal font__size--14 text__14-1024 mb-1">
                        Master Chef
                      </p>
                      <ul className="list">
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Facebook.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Ig.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Wa.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="wrapper__chef text-center">
                      <img
                        src="./../images/Rectangle 7.png"
                        className="img mb-4"
                        alt=""
                      />
                      <h4 className="bold font__size--24 text__24-1024 text__24-sm playfair">
                        Robert Hawkins
                      </h4>
                      <p className="normal font__size--14 text__14-1024 mb-1">
                        Master Chef
                      </p>
                      <ul className="list">
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Facebook.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Ig.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Wa.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="wrapper__chef text-center">
                      <img
                        src="./../images/Rectangle 8.png"
                        className="img mb-4"
                        alt=""
                      />
                      <h4 className="bold font__size--24 text__24-1024 text__24-sm playfair">
                        Cameron Williamson
                      </h4>
                      <p className="normal font__size--14 text__14-1024 mb-1">
                        Master Chef
                      </p>
                      <ul className="list">
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Facebook.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Ig.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <img src="./../images/Icon - Wa.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        <section className="bg__gray-2">
          <div className="container">
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              What Our Customers Say
            </h2>

            <div className="mb__5">
              <Testimoni />
            </div>

            <Subscribe class={"mb__min-18"} />
          </div>
        </section>

        <Footer class={"mt__18"} />
      </div>
    </Fragment>
  );
};

export default About;
