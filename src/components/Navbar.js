import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h3
                style={{
                  textTransform: "uppercase",
                  margin: "0px",
                  fontFamily: "'Barlow Condensed', sans-serif"
                }}
              >
                Kaunas City Guide
              </h3>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/blog">
                Categories
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
