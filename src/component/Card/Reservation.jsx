import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Reservation = (props) => {
  return (
    <Fragment>
      <div className="wrapper__reservation position-relative overflow-hidden">
        <img
          src="./../images/New Project (1) 2.png"
          className="path__2"
          alt=""
        />
        <div className="position-relative z-2">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left my-auto">
              <h2 className="color__white bold font__size--48 text__48-1024 text__48-md text__48-sm playfair bold mb-0">
                Get Up to 80% Offer On This Weekend
              </h2>
              <p className="normal font__size--16 text__16-1024 color__white my-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt n
              </p>
              <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-lg-start align-items-center">
                <NavLink
                  to="/reservation"
                  className="mb-3 medium font__size--16 text__16-1024 btn btn__yellow btn__original color__black shadow"
                >
                  Reservation
                </NavLink>
                <NavLink
                  to="/contact"
                  className="ml-sm-3 mb-3 medium font__size--16 text__16-1024 color__white btn btn__outlined--white btn__original no__opacity shadow h__black"
                >
                  Get in Touch
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 d-none d-lg-block my-auto text-right">
              <img src="./../images/Mask group.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reservation;
