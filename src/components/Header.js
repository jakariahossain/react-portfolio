import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <Link
            activeClass="active"
            to="banner_main"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-brand"
          >
            Jakaria Hossain
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  activeClass="active"
                  to="banner_main"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about_section"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="service_section"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="portfolio_section"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact_section"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
