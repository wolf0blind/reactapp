import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";

const Contact = (props) => {
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
                <span className="color__yellow">Contact Us</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Contact Us
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
            <img
              src="./../images/Basemap image.png"
              className="mb-5 wrapper__image-map"
              alt=""
            />
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-5 text-center">
                  Contact Information
                </h2>

                <div className="row">
                  <div className="col-md-4">
                    <div className="wrapper__contact-list text-center">
                      <div className="icon mb-3 mx-auto">
                        <img src="./../images/img (1).png" alt="" />
                      </div>
                      <h5 className="bold font__size---28 text__28-1024 playfair">
                        Email Us
                      </h5>
                      <p className="normal font__size--20 text__20-1024">
                        your.email.inbox@here.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wrapper__contact-list text-center">
                      <div className="icon mb-3 mx-auto">
                        <img src="./../images/img (2).png" alt="" />
                      </div>
                      <h5 className="bold font__size---28 text__28-1024 playfair">
                        Visit Us
                      </h5>
                      <p className="normal font__size--20 text__20-1024">
                        4517 Washington Ave. <br /> Manchester, Kentucky 39495
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wrapper__contact-list text-center">
                      <div className="icon mb-3 mx-auto">
                        <img src="./../images/img (3).png" alt="" />
                      </div>
                      <h5 className="bold font__size---28 text__28-1024 playfair">
                        Contact Us
                      </h5>
                      <p className="normal font__size--20 text__20-1024">
                        +62 424 954 824
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <hr className="my-5 hr__line-contact" />
              </div>

              <div className="col-md-10">
                <div className="wrapper__book-form bg__gray-2">
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
            <Subscribe class={""} />
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;
