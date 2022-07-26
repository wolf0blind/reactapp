import React, { useState, Fragment } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Subscribe from "../../component/Card/Subscribe";
import Footer from "../../component/Footer/Footer";
const Faq = (props) => {
  const [accordion, setAccordion] = useState([
    {
      title: "How to pay an online table reservation?",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: "How to become a VIP cumtomer in our restaurant?",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: "What happens if I don't reconfirm my booking?",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: "It is possible to request personalized dishes?",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: "How do I cancel a booking?",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
  ]);

  const [active, setActive] = useState(0);

  const onclickActive = (e) => {
    if (e == active) {
      setActive(0);
    } else {
      setActive(e);
    }
  };
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
                <span className="color__yellow">FAQ</span>
              </h5>
            </div>
            <section>
              <div className="container">
                <div className="text-center">
                  <h1 className="bold font__size--80 text__80-1024 text__80-md text__80-sm text__80-xs playfair color__white mb-4">
                    FAQ
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

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                {accordion.map((obj, i) => {
                  return (
                    <div className="wrapper__accordion">
                      <div
                        className={
                          "head pointer " + (active == i + 1 ? "active" : "")
                        }
                        onClick={() => onclickActive(i + 1)}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="mb-0 mr-2 title semi-bold playfair font__size--28 text__28-1024">
                            {obj.title}
                          </h5>
                          <div className="icon position-relative">
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                      <div className="desc">
                        <p className="normal font__size--18 text__18-1024 mb-0">
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="wrapper__book-form bg__gray-2 mb-5">
                  <div className="text-center mb-5">
                    <h2 className="bold font__size--48 text__48-1024 text__48-md text__48-sm playfair mb-0">
                      Write us a Message
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <input
                          type="text"
                          className="form-control normal font__size--14 text__14-1024"
                          placeholder="Enter Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group wrapper__input-field">
                        <select
                          className="form-control normal font__size--14 text__14-1024"
                          name=""
                          id=""
                        >
                          <option select disabled hidden value="">
                            Select Person
                          </option>
                          <option value="">select 1</option>
                          <option value="">select 2</option>
                          <option value="">select 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group wrapper__input-field">
                        <textarea
                          name=""
                          className="form-control normal font__size--14 text__14-1024"
                          id=""
                          placeholder="Message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn btn__yellow color__black medium font__size--16 text__16-1024 shadow">
                      Send a Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default Faq;
