import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const FavoriteMenu = (props) => {
  return (
    <Fragment>
      <NavLink
        to="/product-detail"
        className="wrapper__list-menu d-flex align-items-center"
      >
        <img src={props.data.img} className="img" alt="" />
        <div className="ml-3 w-100">
          <div className="d-flex justify-content-between align-items-end w-100 mb-2">
            <h5 className="bold color__black font__size--24 text__24-1024 text__24-sm playfair mb-0 lh-1 flex-shrink-0">
              {props.data.title}
            </h5>
            <div className="line"></div>
            <div className="color__black d-inline-block medium font__size--18 text__18-1024">
              <span className="bold color__yellow">$</span>
              {props.data.price}
            </div>
          </div>
          <p className="color__black mb-0 normal font__size--14 text__14-1024">
            {props.data.detail}
          </p>
        </div>
      </NavLink>
    </Fragment>
  );
};

export default FavoriteMenu;
