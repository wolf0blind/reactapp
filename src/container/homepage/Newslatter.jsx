import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
import CardArticle from "../../component/Card/CardArticle";
const Newslatter = (props) => {
  const articles = [
    {
      img: "./../images/Bg.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-1.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-2.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-3.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-4.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-5.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-6.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-7.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
    {
      img: "./../images/Bg-8.jpg",
      title: "Chicken Lettuce Wraps with Lime Drench",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
      link: "#!",
    },
  ];
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
                <span className="color__yellow">Newsletter</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    Newsletter
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
            <div className="text-center mb-5">
              <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair">
                Welcome to Our Newsletter
              </h2>
            </div>

            <div className="row justify-content-center mb-4">
              <div className="col-xl-10">
                <div className="row">
                  {articles.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 mb-4">
                        <CardArticle obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <nav
              className="wrapper__pagination"
              aria-label="Page navigation example"
            >
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link normal font__size--20 text__20-1024 active"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link normal font__size--20 text__20-1024"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link normal font__size--20 text__20-1024"
                    href="#"
                  >
                    3
                  </a>
                </li>
              </ul>
            </nav>
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

export default Newslatter;
