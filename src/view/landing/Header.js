import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../variables";
// import "./landing.css";

export default function Mynavbar() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="main-hero">
      <div className="heading-container">
        <Navbar expand="sm" className="mb-3  navbar-light big-text main-nav">
          <Nav className="row-nav">
            <NavbarBrand href="/">
              {/* <img src={Img2} alt="Rekod" width="100px" /> */}
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
          </Nav>
          <Collapse
            navbar
            className="justify-content-between main-nav-list"
            isOpen={!collapsed}
          >
            <Nav className="me-auto text-light" navbar></Nav>
            <NavLink
              href={"#rekod"}
              onClick={() => navigate("/login")}
              className="text-dark "
            >
              <b>Login</b>
            </NavLink>
            <NavLink
              href={"#rekod"}
              onClick={() => navigate("/signup")}
              className="text-dark "
            >
              <strong
                style={{ borderRadius: 10, background: primaryColor }}
                className="px-4 p-3 text-white"
              >
                Signup
              </strong>
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
      <div className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Track your personal finance and plan for the future.
            </h1>
            <a
              href="#rekod"
              onClick={() => navigate("/login")}
              className="btn btn--full margin-right-sm"
            >
              Get Started
            </a>
          </div>
          {/* <div className="hero-img-box">
             <img src={step} alt='logo' />
           </div> */}
        </div>
      </div>
    </div>
  );
}
