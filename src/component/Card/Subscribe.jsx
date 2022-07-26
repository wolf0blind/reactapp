import React, { Component, Fragment } from "react";

const Subscribe = (props) => {
  return (
    <Fragment>
      <div
        className={
          "wrapper___subscribe text-center position-relative " +
          (props.class ? props.class : "")
        }
      >
        <img src="./../images/Rectangle 10.png" className="path__2" alt="" />
        <div className="position-relative z-2">
          <h2 className="bold font__size--64 text__65-1024 text__65-sm text__65-xxs color__white playfair">
            Subscribe Our Newsletter
          </h2>
          <p className="normal font__size--16 text__16-1024 color__white mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>

          <div className="wrapper__field-input d-flex flex-wrap flex-sm-nowrap justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Enter Your Email Here"
              className="normal font__size--14 text__14-1024 color__white"
            />
            <button className="ml-sm-3 mt-3 mt-sm-0 btn btn__yellow text__16-1024 color__black shadow btn__original">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;
