import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import FavoriteMenu from "../../component/Card/FavoriteMenu";
const MeetChef = (props) => {
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
                <span className="color__yellow">Meet Our Chef</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Meet Our Chef
                  </h1>
                  <p className="normal font__size--16 text__16-1024 color__white">
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <br className="d-none d-lg-block" /> aliqua dolor do amet
                    sint
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section>
          <div className="container">
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              Meet Our Master Chef
            </h2>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row justify-content-center">
                  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
                    <div className="wrapper__chef text-center">
                      <img
                        src="./../images/Rectangle 6.png"
                        className="img mb-4"
                        alt=""
                      />
                      <h4 className="bold font__size--24 text__24-1024 playfair">
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
                      <h4 className="bold font__size--24 text__24-1024 playfair">
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
                      <h4 className="bold font__size--24 text__24-1024 playfair">
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

        <section className="pb-0 pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="wrapper__book-form bg__gray-2 mb-5">
                  <div className="text-center mb-5">
                    <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-0">
                      Write us a Message
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <select
                          className="form-control normal font__size--14 text__14-1024"
                          name=""
                          id=""
                        >
                          <option select disabled hidden value="">
                            Select Person
                          </option>
                          <option value="">select 1</option>
                          <option value="">select 2</option>
                          <option value="">select 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group wrapper__input-field">
                        <textarea
                          name=""
                          className="form-control normal font__size--14 text__14-1024"
                          id=""
                          placeholder="Message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn btn__yellow color__black medium font__size--16 text__16-1024 shadow">
                      Send a Message
                    </button>
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

export default MeetChef;
