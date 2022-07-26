import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
const Checkout = (props) => {
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
                <span className="color__yellow">Checkout</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Checkout
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

        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="wrapper__book-form bg__gray-2 mb-5">
                  <div className="text-center">
                    <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-0">
                      Book a Table
                    </h2>
                  </div>

                  <hr className="hr__line-gray mt-5 mb-5" />

                  <div className="row mb-5">
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
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Country / Region"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group wrapper__input-field">
                        <textarea
                          name=""
                          className="form-control normal font__size--14 text__14-1024"
                          id=""
                          placeholder="Street Address"
                          cols="30"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <hr className="hr__line-gray mt-4 mb-4" />

                  <h4 className="bold font__size--24 text__24-1024 playfair mb-4 mt-4">
                    Additional information
                  </h4>

                  <div className="form-group wrapper__input-field mb-5">
                    <textarea
                      name=""
                      className="form-control normal font__size--14 text__14-1024"
                      id=""
                      placeholder="Order Notes"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>

                  <hr className="hr__line-gray mt-4 mb-4" />
                  <h4 className="bold font__size--24 text__24-1024 playfair mb-4 mt-4">
                    Additional information
                  </h4>

                  <a
                    href="#!"
                    className="btn btn__outlined--black no__opacity color__black medium font__size--20 text__20-1024 shadow mb-4"
                  >
                    Click here to enter your code
                  </a>

                  <hr className="hr__line-gray mt-4 mb-4" />

                  <h4 className="bold font__size--24 text__24-1024 playfair mb-4 mt-4">
                    Your Order
                  </h4>

                  <div className="row mb-5">
                    <div className="col-md-6">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="normal font__size--18 text__18-1024">
                          Product
                        </span>
                        <span className="normal font__size--18 text__18-1024">
                          Subtotal
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="medium playfair font__size--18 text__18-1024">
                          Our Favorite Menu 1
                        </span>
                        <span className="normal font__size--24 text__24-1024">
                          $32
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className="medium playfair font__size--18 text__18-1024">
                          Our Favorite Menu 2
                        </span>
                        <span className="normal font__size--24 text__24-1024">
                          $32
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="bold playfair font__size--18 text__18-1024">
                          Sub Total
                        </span>
                        <span className="bold font__size--24 text__24-1024">
                          $64
                        </span>
                      </div>
                      <hr className="hr__line-gray mt-4 mb-4" />
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="bold playfair font__size--18 text__18-1024">
                          Total
                        </span>
                        <span className="bold font__size--24 text__24-1024">
                          $64
                        </span>
                      </div>
                    </div>
                  </div>

                  <hr className="hr__line-gray mt-4 mb-4" />

                  <h4 className="bold font__size--24 text__24-1024 playfair mb-4 mt-4">
                    Payment
                  </h4>

                  <div className="wrapper__field-checkbox mb-4 payment">
                    <input type="radio" id="onCheckPayment" name="payment" />
                    <label
                      htmlFor="onCheckPayment"
                      className="check flex-shrink-0 mr-2 mb-0"
                    ></label>
                    <label
                      htmlFor="onCheckPayment"
                      className="medium font__size--18 text__18-1024 text__18-1024 color__black playfair mb-0"
                    >
                      Direct bank transfer
                    </label>
                  </div>

                  <div className="wrapper__field-checkbox mb-4 payment">
                    <input type="radio" id="onCashDelivery" name="payment" />
                    <label
                      htmlFor="onCashDelivery"
                      className="check flex-shrink-0 mr-2 mb-0"
                    ></label>
                    <label
                      htmlFor="onCashDelivery"
                      className="medium font__size--18 text__18-1024 text__18-1024 color__black playfair mb-0"
                    >
                      Check payments
                    </label>
                  </div>

                  <div className="wrapper__field-checkbox mb-4 payment">
                    <input type="radio" id="onPaypal" name="payment" />
                    <label
                      htmlFor="onPaypal"
                      className="check flex-shrink-0 mr-2 mb-0"
                    ></label>
                    <label
                      htmlFor="onPaypal"
                      className="medium font__size--18 text__18-1024 text__18-1024 color__black playfair mb-0"
                    >
                      Cash on delivery
                    </label>
                  </div>

                  <p className="mt-5 mb-5 normal font__size--18 text__18-1024 color__gray-1">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <span className="color__black">privacy policy.</span>
                  </p>

                  <div className="text-center">
                    <button className="btn btn__yellow color__black medium font__size--16 text__16-1024 shadow">
                      Place Order
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

export default Checkout;
