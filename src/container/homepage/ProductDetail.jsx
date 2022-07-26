import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import Rating from "../../component/Other/Rating";
import ChooseMenu from "../../component/Card/ChooseMenu";
const ProductDetail = (props) => {
  const [number, setNumber] = useState(1);

  const onClickNumber = (e) => {
    if (e == "plus") {
      return setNumber(number + 1);
    }

    if ((e = "min") && number > 1) {
      return setNumber(number - 1);
    }
  };

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
                <span className="color__yellow">Product Detail</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Product Detail
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
            <div className="row mb-3 mb-md-5">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="./../images/fdsdf.png"
                  className="images__product-detail"
                  alt=""
                />
              </div>
              <div className="col-md-6 my-auto">
                <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs bold playfair mb-3 mb-md-5">
                  Our Favorite Menu 1
                </h2>
                <div className="d-flex mb-3 mb-md-5">
                  <div className="">
                    <h5 className="normal font__size--20 text__20-1024 mb-2 color__gray-1">
                      Price:
                    </h5>
                    <h3 className="font__size--64 text__65-1024 text__65-sm text__65-xxs bold">
                      <span className="color__yellow">$</span>
                      <span className="medium">13</span>
                    </h3>
                  </div>
                  <div className="ml-5">
                    <h5 className="normal font__size--20 text__20-1024 mb-3 color__gray-1">
                      Category:
                    </h5>
                    <div className="medium font__size--16 text__16-1024 btn__tag d-inline-block">
                      Lunch
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="normal font__size--20 text__20-1024 mb-3 color__gray-1">
                    Select Quantity:
                  </h5>
                  <div className="wrapper__btn-count d-flex align-items-center">
                    <div
                      className="pointer btn__action"
                      onClick={() => onClickNumber("min")}
                    >
                      <img src="./../images/Icon - Minus.png" alt="" />
                    </div>
                    <span className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair d-inline-block mx-3">
                      {number < 10 ? 0 : ""}
                      {number}
                    </span>
                    <div
                      className="pointer btn__action"
                      onClick={() => onClickNumber("plus")}
                    >
                      <img src="./../images/Icon - Plus.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-3">
                Description
              </h4>
              <p className="normal font__size--16 text__16-1024 lh-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                pellentesque et nibh tincidunt bibendum. Sed in tellus in
                feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed
                sed pellentesque posuere orci sit sed. Gravida facilisis
                sollicitudin donec vitae quam ut nibh enim. Enim semper nulla
                quis est. Est scelerisque malesuada maecenas augue elementum
                integer. Sollicitudin augue in libero eu neque augue diam lectus
                laoreet. Viverra amet, in massa integer tincidunt ullamcorper.
                Accumsan massa consequat amet cursus condimentum consectetur.
                Enim sem cursus viverra at imperdiet.
              </p>
            </div>

            <div className="mb-5">
              <h4 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-3">
                Review Product (1)
              </h4>

              <div className="row">
                <div className="col-lg-10">
                  <div className="wrapper__card-comment">
                    <div className="d-flex align-items-center justify-content-start justify-content-md-between mb-4">
                      <div className="profile d-flex align-items-center">
                        <img
                          src="./../images/dfdsfsf.png"
                          alt=""
                          className="img mr-3"
                        />
                        <span className="medium d-none d-md-block font__size--16 text__16-1024 mr-4">
                          Guy Hawkins
                        </span>
                        <div className="d-none d-md-block">
                          <Rating rating={5} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <span className="medium d-md-none font__size--16 text__16-1024 mb-3">
                            Guy Hawkins
                          </span>
                          <div className="d-md-none  mb-3">
                            <Rating rating={5} />
                          </div>
                        </div>
                        <div className="date medium font__size--20 text__20-1024">
                          May 5,2022
                        </div>
                      </div>
                    </div>
                    <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tortor pellentesque et nibh tincidunt bibendum. Sed in
                      tellus in feugiat dui et enim. Odio feugiat id donec
                      ultricies. Nisi, sed sed pellentesque posuere orci sit
                      sed. Gravida facilisis sollicitudin donec vitae quam ut
                      nibh enim.
                    </p>

                    <div className="d-flex align-items-center menu">
                      <img src="./../images/fdsdf.png" className="img" alt="" />
                      <div className="ml-3">
                        <h5 className="bold font__size--24 text__24-1024 text__24-sm playfair mb-3">
                          Our Favorite Menu 1
                        </h5>
                        <div className="medium font__size--16 text__16-1024 btn__tag d-inline-block">
                          Lunch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-4">
              Relate Products
            </h4>

            <div className="row">
              {chooseMenu.map((obj) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-4">
                    <ChooseMenu obj={obj} />
                  </div>
                );
              })}
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

export default ProductDetail;
