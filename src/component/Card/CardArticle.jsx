import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardArticle = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-article">
        <img src={props.obj.img} className="img mb-3" alt="" />
        <h5 className="bold font__size--24 text__24-1024 text__24-sm playfair mb-0">
          {props.obj.title}
        </h5>
        <p className="normal font__size--14 text__14-1024 my-2 color__gray-1">
          {props.obj.description}
        </p>

        <NavLink to="/detail-blog" className="d-inline-block color__yellow">
          <div className="d-flex align-items-center">
            <span className="bols font__size--16 text__16-1024 mr-2 bold">
              Read Full Article
            </span>
            <img src="./../images/Icon - Arrow.png" alt="" />
          </div>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default CardArticle;
