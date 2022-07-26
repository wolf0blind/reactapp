import React, { Component, Fragment } from "react";
import Slider from "react-slick";

const Testimoni = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 514,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <Slider {...settings} className="wrapper__slider-testi">
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
            <div className="items">
              <div className="card__wrap text-center">
                <h4 className="bold font__size--22 text__24-1024 text__24-sm playfair">
                  It’s really cool!
                </h4>
                <p className="normal font__size--16 text__16-1024 color-_gray-1 mb-5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>

                <img
                  src="./../images/Ellipse 6.png"
                  className="profile mx-auto mb-2"
                  alt=""
                />
                <h5 className="medium font__size--16 text__16-1024">
                  Robert Fox
                </h5>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimoni;
