import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";

const DetailBlog = (props) => {
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
                <span className="">Newsletter</span> {" > "}
                <span className="color__yellow">Detail Blog</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--54 text__50-1024 text__50-sm text__50-xs playfair color__white mb-4">
                    Chicken Lettuce Wraps with Lime Drench
                  </h1>
                  <div className="wrapper__profile d-flex flex-sm-nowrap flex-wrap align-items-center justify-content-center mb-3">
                    <div className="d-flex align-items-center mr-4">
                      <img
                        src="./../images/dfdsfsf.png"
                        className="img mr-3"
                        alt=""
                      />
                      <span className="medium text-uppercase font__size--16 text__16-1024 color__white">
                        Brooklyn Simmons
                      </span>
                    </div>
                    <div className="date medium font__size--20 text__20-1024 color__white">
                      May 5,2022
                    </div>
                  </div>
                  <hr className="hr__line opacity__5 mt-5 mb-4" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="pb-0">
          <div className="container">
            <img
              src="./../images/ffdfd.jpg"
              className="images__head-detail mb-4"
              alt=""
            />
            <p className="normal font__size--16 text__16-1024 mb-4 lh-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat
              dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
              pellentesque posuere orci sit sed. Gravida facilisis sollicitudin
              donec vitae quam ut nibh enim. Enim semper nulla quis est. Est
              scelerisque malesuada maecenas augue elementum integer.
              Sollicitudin augue in libero eu neque augue diam lectus laoreet.
              Viverra amet, in massa integer tincidunt ullamcorper. Accumsan
              massa consequat amet cursus condimentum consectetur. Enim sem
              cursus viverra at imperdiet.
            </p>

            <div className="wrapper__caption position-relative lh-2 medium font-italic font__size--20 text__20-1024 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat
              dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
              pellentesque posuere orci sit sed. Gravida facilisis sollicitudin
              donec vitae quam ut nibh enim.
            </div>

            <p className="normal font__size--16 text__16-1024 mb-4 lh-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              pellentesque et nibh tincidunt bibendum. Sed in tellus in
              feugiatugiat id donec ultricies. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
              bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id
              donec ultricies.
            </p>
            <p className="normal font__size--16 text__16-1024 mb-4 lh-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat
              dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
              pellentesque posuere orci sit sed. Gravida facilisis sollicitudin
              donec vitae quam ut nibh enim. Enim semper nulla quis est. Est
              scelerisque malesuada maecenas augue elementum integer.
              Sollicitudin augue in libero eu neque augue diam lectus laoreet.
              Viverra amet, in massa integer tincidunt ullamcorper. Accumsan
              massa consequat amet cursus condimentum consectetur. Enim sem
              cursus viverra at imperdiet.
            </p>

            <div className="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <h5 className="mb-0 bold font__size--22 text__22-md text__22-sm playfair">
                  Tags:
                </h5>
                <div className="ml-3 wrapper__tag-list">
                  <div className="medium font__size--16 text__16-1024 btn__tag mb-3 mb-sm-0 d-inline-block">
                    Food
                  </div>
                  <div className="medium font__size--16 text__16-1024 btn__tag mb-3 mb-sm-0 d-inline-block">
                    Healthy
                  </div>
                  <div className="medium font__size--16 text__16-1024 btn__tag mb-3 mb-sm-0 d-inline-block">
                    Dessert
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <h5 className="mb-0 bold font__size--22 text__22-md text__22-sm playfair">
                  Share:
                </h5>
                <div className="ml-3 wrapper__share-list">
                  <a href="#!">
                    <img src="./../images/sos (2).png" alt="" />
                  </a>
                  <a href="#!">
                    <img src="./../images/sos (1).png" alt="" />
                  </a>
                  <a href="#!">
                    <img src="./../images/sos (3).png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <hr className="hr__line-gray my-4" />

            <h4 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair text-center mb-5 pt-3">
              Comments (1)
            </h4>

            <div className="row justify-content-center mb__5">
              <div className="col-md-8">
                <div className="wrapper__card-comment">
                  <div className="d-flex align-items-center justify-content-sm-between mb-4">
                    <div className="profile d-flex align-items-center">
                      <img
                        src="./../images/dfdsfsf.png"
                        alt=""
                        className="img mr-sm-3"
                      />
                      <span className="medium d-sm-block d-none font__size--16 text__16-1024 mr-4">
                        Guy Hawkins
                      </span>
                    </div>
                    <div className="ml-3 ml-sm-0">
                      <span className="medium d-sm-none font__size--16 text__16-1024 mb-3">
                        Guy Hawkins
                      </span>
                      <div className="date medium font__size--20 text__20-1024">
                        May 5,2022
                      </div>
                    </div>
                  </div>
                  <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor pellentesque et nibh tincidunt bibendum. Sed in
                    tellus in feugiat dui et enim. Odio feugiat id donec
                    ultricies. Nisi, sed sed pellentesque posuere orci sit sed.
                    Gravida facilisis sollicitudin donec vitae quam ut nibh
                    enim.
                  </p>

                  <div className="d-flex align-items-center justify-content-end">
                    <a
                      href="#!"
                      className="d-inline-block color__black unde normal font__size--16 text__16-1024"
                    >
                      <u>Reply</u>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="wrapper__book-form bg__gray-2">
                  <div className="text-center mb-5">
                    <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-0">
                      Write a comment
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
                          placeholder="Enter Your Last Name"
                        />
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

export default DetailBlog;
