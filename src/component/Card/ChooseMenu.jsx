import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const ChooseMenu = (props) => {
  return (
    <Fragment>
      <NavLink to="/product-detail" className="wrapper__images-favorite d-inline-block w-100">
        <img src={props.obj.img} className="img" alt="" />
        <div className="d-flex justify-content-between align-items-center mb-0 mt-3">
          <h5 className="mb-0 color__black playfair">{props.obj.title}</h5>
          <div className="d-inline-block color__black medium font__size--18 text__18-1024">
            <span className="bold color__yellow">$</span>
            {props.obj.price}
          </div>
        </div>
        <p className="mb-0 normal color__black font__size--14 text__14-1024">
          {props.obj.detail}
        </p>
      </NavLink>
    </Fragment>
  );
};

export default ChooseMenu;
