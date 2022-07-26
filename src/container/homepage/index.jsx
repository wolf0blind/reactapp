import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import Reservation from "../../component/Card/Reservation";
import FavoriteMenu from "../../component/Card/FavoriteMenu";
import CardArticle from "../../component/Card/CardArticle";
import Testimoni from "../../component/Slider/Testimoni";
import { NavLink } from "react-router-dom";
const Index = (props) => {
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

  const articles = [
    {
      img: "./../images/Bg.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-1.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-2.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
  ];
  return (
    <Fragment>
      <div className="overflow-hidden">
        <div className="bg__black position-relative">
          <img src="./../images/Group 162756.jpg" className="path__1" alt="" />
          <div className="position-relative z-2">
            <Navbar />

            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p className="medium font__size--18 text__18-1024 color__white">
                      Welcome Back to{" "}
                      <span className="playfair bold">
                        Resto<span className="color__yellow">Q</span>
                      </span>
                    </p>
                    <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                      Book Your <br /> Table Today
                    </h1>
                    <p className="normal font__size--16 text__16-1024 color__white mb-4">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor <br className="d-none d-xl-block" /> do amet sint
                      Amet minim mollit non deserunt ullamco est{" "}
                      <br className="d-none d-xl-block" /> sit aliqua dolor do
                      amet sint
                    </p>
                    <NavLink
                      to="/reservation"
                      className="font__size--20 text__20-1024 medium btn btn__yellow color__black shadow btn__original"
                    >
                      Reservation
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 mb-4 my-md-auto">
                <img
                  src="./../images/Rectangle 1.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 my-auto">
                <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-4">
                  Discover and Reserve Your Table with Special Menu Every day
                </h2>
                <p className="normal font__size--16 text__16-1024 color__gray-1 mb-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <NavLink
                  to="/reservation"
                  className="font__size--20 text__20-1024 medium btn btn__yellow color__black shadow btn__original"
                >
                  Reservation
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="wrapper__choose-wrap position-relative bg__gray-2 z-2">
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

        <section className="pt-0">
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
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              Welcome to Our Newsletter
            </h2>
            <div className="row justify-content-center mb-4">
              <div className="col-xl-10">
                <div className="row justify-content-center">
                  {articles.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 mb-4">
                        <CardArticle obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="text-center">
              <NavLink
                to="/newslatter"
                className="medium font__size--16 text__16-1024  btn btn__outlined--black no__opacity shadow"
              >
                See All
              </NavLink>
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

export default Index;
