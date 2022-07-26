import React, { Component, Fragment, useRef } from "react";
import Slider from "react-slick";

const SliderFooter = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const slider1 = useRef(null);

  const previous = () => {
    slider1.current.slickNext();
  };

  const next = () => {
    slider1.current.slickPrev();
  };
  return (
    <Fragment>
      <Slider
        {...settings}
        ref={slider1}
        className="wrapper__slider-footer-menu"
      >
        <div className="items">
          <a href="#!">
            <img src="./../images/Image.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-1.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-2.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-3.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-4.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-5.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-1.png" alt="" />
          </a>
        </div>
        <div className="items">
          <a href="#!">
            <img src="./../images/Image-2.png" alt="" />
          </a>
        </div>
      </Slider>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <img
          onClick={previous}
          src="./../images/Icon - Back.png"
          className="pointer"
          alt=""
        />
        <img
          onClick={next}
          src="./../images/Icon - Back (1).png"
          className="pointer"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default SliderFooter;
