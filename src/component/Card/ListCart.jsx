import React, { Component, Fragment, useState } from "react";

const ListCart = (props) => {
  const [number, setNumber] = useState(1);

  const onClickNumber = (e) => {
    if (e == "plus") {
      return setNumber(number + 1);
    }

    if ((e = "min") && number > 1) {
      return setNumber(number - 1);
    }
  };
  return (
    <Fragment>
      <div className="row justify-content-between wrapper__list-cart-product position-relative">
        <div className="my-auto col-sm-4 col-md-2">
          <div className="d-flex align-items-center">
            <div className="wrapper__field-checkbox">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="Bike"
              />
              <label
                htmlFor="checkbox1"
                className="check flex-shrink-0 mt-1 mr-2"
              ></label>
            </div>
            <img src="./../images/Bg.png" className="ml-4 preview" alt="" />
          </div>
        </div>
        <div className="my-auto col col-md-4 pl-5">
          <h5 className="bold font__size--24 text__24-1024 text__24-sm ml-4 ml-sm-0 mt-3 mt-sm-0 mb-3 mb-md-0">
            Our Favorite Menu 1
          </h5>
          <div className="row d-md-none ml-3 ml-sm-0">
            <div className="my-auto col">
              <h5 className="medium font__size--24 text__24-1024 text__24-sm mb-0">
                $32
              </h5>
            </div>
            <div className="my-auto col">
              <div className="wrapper__btn-count d-flex align-items-center">
                <div
                  className="pointer btn__action cart"
                  onClick={() => onClickNumber("min")}
                >
                  <img src="./../images/Icon - Minus.png" alt="" />
                </div>
                <span className="bold font__size--24 text__24-1024 text__24-sm playfair d-inline-block mx-3">
                  {number < 10 ? 0 : ""}
                  {number}
                </span>
                <div
                  className="pointer btn__action cart"
                  onClick={() => onClickNumber("plus")}
                >
                  <img src="./../images/Icon - Plus.png" alt="" />
                </div>
              </div>
            </div>
            <div className="my-auto col">
              <h5 className="medium font__size--24 text__24-1024 text__24-sm mb-0">
                $32
              </h5>
            </div>
          </div>
        </div>
        <div className="my-auto d-none d-md-block col-md-1">
          <h5 className="medium font__size--24 text__24-1024 text__24-sm mb-0">
            $32
          </h5>
        </div>
        <div className="my-auto d-none d-md-block col-md-2">
          <div className="wrapper__btn-count d-flex align-items-center">
            <div
              className="pointer btn__action cart"
              onClick={() => onClickNumber("min")}
            >
              <img src="./../images/Icon - Minus.png" alt="" />
            </div>
            <span className="bold font__size--24 text__24-1024 text__24-sm playfair d-inline-block mx-3">
              {number < 10 ? 0 : ""}
              {number}
            </span>
            <div
              className="pointer btn__action cart"
              onClick={() => onClickNumber("plus")}
            >
              <img src="./../images/Icon - Plus.png" alt="" />
            </div>
          </div>
        </div>
        <div className="my-auto d-none d-md-block col-md-1">
          <h5 className="medium font__size--24 text__24-1024 text__24-sm mb-0">
            $32
          </h5>
        </div>
        <div className="my-auto col-md-1">
          <img
            src="./../images/Icon - Close.png"
            className="pointer remove"
            alt=""
          />
        </div>
      </div>
      <hr className="hr__line-gray my-4" />
    </Fragment>
  );
};

export default ListCart;
