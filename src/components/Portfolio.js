import React from "react";
import Ecommerce from "../images/E-Commerce-Mern.jpg";
import PhoneApp from "../images/Mobile Shop.jpg";
import PlayerList from "../images/BPL.jpg";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio_section">
      <h2 className="my-5">
        <span className="line-sec"></span> Portfolio
      </h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card portfolio">
            <img src={Ecommerce} alt="" />
            <div className="card-body">
              <h5 className="card-title port_title">
                Ecommerce App with Payment Gateway and Admin Dashboard
              </h5>

              <p className="port_desc">
                Developed a Fully Functioning Ecommerce App Utilized Nodejs API,
                MongoDB, Reactjs, Payment Integration with PayPal and Credit
                Card
              </p>

              <a
                href="https://groceryshopjack.herokuapp.com/"
                target="_blank"
                className="icon_port"
              >
                Live Preview: <i class="fas fa-eye"></i>
              </a>
              <a
                href="https://github.com/jakariahossain/zabir-mart"
                target="_blank"
                className="icon_port"
              >
                Source Code: <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card portfolio">
            <img src={PhoneApp} alt="" />
            <div className="card-body">
              <h5 className="card-title port_title">
                Mobile Shopping Cart App
              </h5>

              <p className="port_desc">
                Developed a React Ecommerce App Utilized Reactjs, Cart System,
                Payment Integration with PayPal
              </p>

              <a
                href="https://react-phone-store-jakaria.netlify.app/"
                target="_blank"
                className="icon_port"
              >
                Live Preview: <i class="fas fa-eye"></i>
              </a>
              <a
                href="https://github.com/jakariahossain/zabir-mart"
                target="_blank"
                className="icon_port"
              >
                Source Code: <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card portfolio">
            <img src={PlayerList} alt="" />
            <div className="card-body">
              <h5 className="card-title port_title">Player List Auction App</h5>

              <p className="port_desc">
                Developed a React Frontend App Utilized Reactjs, Cart System
                with Total
              </p>

              <a
                href="https://gifted-bose-3c9c35.netlify.app/ "
                target="_blank"
                className="icon_port"
              >
                Live Preview: <i class="fas fa-eye"></i>
              </a>
              <a
                href="https://github.com/Porgramming-Hero-web-course/simple-react-jakariahossain"
                target="_blank"
                className="icon_port"
              >
                Source Code: <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
