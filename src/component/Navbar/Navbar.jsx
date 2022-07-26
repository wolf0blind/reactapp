import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink
            to="/"
            exact
            class="navbar-brand font__size--24 text__24-1024 text__24-sm color__white playfair bold "
          >
            Resto<span className="color__yellow">Q</span>
          </NavLink>

          <div className="d-flex d-lg-none align-items-center">
            <NavLink
              to="/reservation"
              className="mr-3 medium font__size--14 text__14-1024 color__white btn btn__outlined--white no__opacity shadow h__black btn__head"
            >
              Book a Table
            </NavLink>
            <button
              class={"navbar-toggler nav__button position-relative "}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  class="nav-link color__white medium font__size--14 text__14-1024 "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  class="nav-link color__white medium font__size--14 text__14-1024 "
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <div className="dropdown wrapper__dropdown-menu">
                  <div
                    class={"menu pointer "}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center color__white medium font__size--14 text__14-1024">
                      Pages
                      <svg
                        className="ml-2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.97976 5.31307C3.15727 5.13556 3.43505 5.11942 3.63079 5.26466L3.68687 5.31307L7.99998 9.62596L12.3131 5.31307C12.4906 5.13556 12.7684 5.11942 12.9641 5.26466L13.0202 5.31307C13.1977 5.49058 13.2138 5.76836 13.0686 5.9641L13.0202 6.02018L8.35353 10.6868C8.17602 10.8644 7.89825 10.8805 7.70251 10.7353L7.64643 10.6868L2.97976 6.02018C2.7845 5.82492 2.7845 5.50833 2.97976 5.31307Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="line"></div>
                    <NavLink
                      className="dropdown-item medium font__size--14 text__14-1024"
                      to="/product-detail"
                    >
                      Product Detail
                    </NavLink>
                    <NavLink
                      to="/detail-blog"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Detail Blog
                    </NavLink>
                    <NavLink
                      to="/testimonial"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Testimonial
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Gallery
                    </NavLink>
                    <NavLink
                      to="/cart"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Cart
                    </NavLink>
                    <NavLink
                      to="/checkout"
                      className="dropdown-item medium font__size--14 text__14-1024"
                      href="#"
                    >
                      Checkout
                    </NavLink>
                    <NavLink
                      to="/faq"
                      className="dropdown-item medium font__size--14 text__14-1024"
                      href="#"
                    >
                      FAQ
                    </NavLink>
                    <NavLink
                      to="/meet-our-chef"
                      className="dropdown-item medium font__size--14 text__14-1024"
                      href="#"
                    >
                      Meet Our Chef
                    </NavLink>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/menu"
                  class="nav-link color__white medium font__size--14 text__14-1024 "
                >
                  Menu
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/newslatter"
                  class="nav-link color__white medium font__size--14 text__14-1024 "
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  class="nav-link color__white medium font__size--14 text__14-1024 "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/reservation"
            className="d-none d-lg-block medium font__size--14 text__14-1024 color__white btn btn__outlined--white no__opacity shadow h__black btn__head"
          >
            Book a Table
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
