import React from "react";

import "./Testimonials.scss";

const Testimonials = (): React.ReactElement => {
  return (
    <div className="testimonials">
      <div className="testimonials__card steelblue">
        <div className="testimonials__card__header">
          <img src="./images/f.jpg" className="header-img" alt="" />
          <span>
            <h3>Farhan Jameel</h3>
            <p>Mern stack Developer</p>
          </span>
        </div>
        <div className="testimonials__card__body">
          <p className="body-title">I received a job offer mid-course.</p>
          <p className="body-text">
            "I was an EMT for many years before I joined the Revlintech. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. "
          </p>
        </div>
      </div>
      <div className="testimonials__card sienna">
        <div className="testimonials__card__header">
          <img src="./images/t.jpg" className="header-img" alt="" />
          <span>
            <h3>Tayyab Jameel</h3>
            <p>Mern stack Developer</p>
          </span>
        </div>
        <div className="testimonials__card__body">
          <p className="body-title">I received a job offer mid-course.</p>
          <p className="body-text">
            "I was an EMT for many years before I joined the Revlintech. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. "
          </p>
        </div>
      </div>
      <div className="testimonials__card">
        <div className="testimonials__card__header">
          <img src="./images/r.jpg" className="header-img" alt="" />
          <span>
            <h3>Raheel Jamal</h3>
            <p>Mern stack Developer</p>
          </span>
        </div>
        <div className="testimonials__card__body">
          <p className="body-title">I received a job offer mid-course.</p>
          <p className="body-text">
            "I was an EMT for many years before I joined the Revlintech. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. "
          </p>
        </div>
      </div>
      <div className="testimonials__card darkcyan">
        <div className="testimonials__card__header">
          <img src="./images/n.jpg" className="header-img" alt="" />
          <span>
            <h3>Naveed Ahamd</h3>
            <p>Mern stack Developer</p>
          </span>
        </div>
        <div className="testimonials__card__body">
          <p className="body-title">I received a job offer mid-course.</p>
          <p className="body-text">
            "I was an EMT for many years before I joined the Revlintech. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. "
          </p>
        </div>
      </div>
      <div className="testimonials__card rebeccapurple">
        <div className="testimonials__card__header">
          <img src="./images/q.jpg" className="header-img" alt="" />
          <span>
            <h3>Qulbe Hussain</h3>
            <p>Mern stack Developer</p>
          </span>
        </div>
        <div className="testimonials__card__body">
          <p className="body-title">I received a job offer mid-course.</p>
          <p className="body-text">
            "I was an EMT for many years before I joined the Revlintech. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. "
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
