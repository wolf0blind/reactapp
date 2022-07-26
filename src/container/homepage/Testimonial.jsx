import React, { useState, Fragment } from "react";

import Testimoni from "../../component/Slider/Testimoni";
import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";

const Testimonial = (props) => {
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
                <span className="color__yellow">Testimonial</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Testimonial
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

        <section className="bg__gray-2">
          <div className="container">
            <h2 className="text-center bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb__5">
              What Our Customers Say
            </h2>

            <Testimoni />
          </div>
        </section>

        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm  playfair">600 +</h2>
                <p className="normal font__size--16 text__16-1024 color__gray-1">
                  Visitor Daily
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair">10 +</h2>
                <p className="normal font__size--16 text__16-1024 color__gray-1">
                  Years of Experience
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair">100 %</h2>
                <p className="normal font__size--16 text__16-1024 color__gray-1">
                  Possitive Feedback
                </p>
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

export default Testimonial;
