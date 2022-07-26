import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import ListCart from "../../component/Card/ListCart";
const Cart = (props) => {
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
                <span className="color__yellow">Cart</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Cart
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
            <div className="row justify-content-between mb-5 normal font__size--18 text__18-1024 d-none d-md-flex">
              <div className="my-auto col-md-2">Select All (2)</div>
              <div className="my-auto col-md-4 pl-5">Product</div>
              <div className="my-auto col-md-1">Price</div>
              <div className="my-auto col-md-2">Qty</div>
              <div className="my-auto col-md-1">Subtotal</div>
              <div className="my-auto col-md-1"></div>
            </div>

            <ListCart />

            <ListCart />

            <div className="row pt-4">
              <div className="col-md-6 col-xl-5 col-md-5 offset-md-6 offset-xl-7">
                <div className="wrapper__cart-pay bg__gray-2">
                  <h5 className="bold font__size--32 playfair mb-4">
                    Cart Total
                  </h5>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="bnormal font__size--18 text__18-1024">
                      Subtotal
                    </span>
                    <span className="medium font__size--24 text__24-1024 text__24-sm">
                      $64
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="bnormal font__size--18 text__18-1024">
                      Vat
                    </span>
                    <span className="medium font__size--24 text__24-1024 text__24-sm">
                      $0
                    </span>
                  </div>
                  <hr className="hr__line-gray my-4" />
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="bnormal font__size--18 text__18-1024">
                      Total
                    </span>
                    <span className="medium font__size--24 text__24-1024 text__24-sm">
                      $64
                    </span>
                  </div>
                  <div className="text-center">
                    <button className="btn btn__yellow color__black medium font__size--16 text__16-1024 shadow">
                      Reserve a Table
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

export default Cart;
