import React from "react";
import "./nav.css";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import { Navbar, NavbarToggler, Button } from "reactstrap";
// import { generalRoot } from 'views/app/routes/helpers'
// import logo from '../../assets/images/logo.png'
// import NavItems from "./NavItems";
import Home from "../view/landing/HomePage";
import { useLocation, useNavigate } from "react-router-dom";
import { LogOut, ShoppingCart } from "react-feather";
// import { logout } from 'redux/actions/auth'

const MainNavbar = () => {
  // const history = (f) => f
  const location = useLocation();
  const navigate = useNavigate();
  // const logout = () => {}
  // const route = ''
  // // location.pathname.includes(generalRoot)
  // //   ? 'GENERAL TAKAFUL'
  // //   : 'FAMILY TAKAFUL'
  // const dispatch = useDispatch()
  // const _logout = () => {
  //   dispatch(
  //     logout(() => {
  //       history.push('/login-page')
  //     }),
  //   )
  // }
  const landingPage = location.pathname === "/";
  return (
    <Navbar
      className="navbar-main mb-2 py-0"
      expand="md"
      fixed="top"
      style={{ maxHeight: 50, backgroundColor: "#f2f2f2" }}
    >
      {/* <Container> */}
      {/* <NavbarBrand className="mr-lg-5 " to="/" tag={Link}>
        <div>
          <img alt="logo" src={logo} height="40" />
        </div>
      </NavbarBrand> */}
      <div className="text-center">
        <h1 className="text-white text-center  ml-lg-5">{""}</h1>
      </div>
      {!landingPage && <Home display={true} />}
      {/* <NavItems /> */}

      <NavbarToggler onClick={() => {}} />
      {/* <Collapse
        toggler="#navbar_global"
        navbar
        className={"d-flex flex-direction-row justify-content-between"}
        // onExiting={this.onExiting}
        // onExited={this.onExited}
      >
        <div className="navbar-collapse-header">
          <Row>
            <Col className="collapse-brand" xs="6">
              <Link to="/">
                <img
                  alt="..."
                  src={require("../../logo.svg")}
                  style={{ minHeight: 45 }}
                />
              </Link>
            </Col>
            <Col className="collapse-close" xs="6">
              <button className="navbar-toggler" id="navbar_global">
                <span />
                <span />
              </button>
            </Col>
          </Row>
        </div>
      </Collapse> */}

      <div className="">
        {" "}
        <Button
          color="light"
          className="m-1"
          onClick={() => navigate("/shopping-cart")}
        >
          <ShoppingCart />
        </Button>
        <Button className="" color="danger" onClick={() => {}}>
          {/* <FaPowerOff size="20px" style={{ marginRight: '10px' }} /> */}
          <LogOut />
          logout
        </Button>
      </div>
      {/* </Container> */}
    </Navbar>
  );
};

// function CustomNavItem({ title = "", location, history, path }) {
//   let active = location.pathname.includes(path);
//   return (
//     <NavItem
//       className={active ? "bg-default border border-primary px-2" : ""}
//       style={{ cursor: "pointer" }}
//     >
//       <NavLink
//         onClick={() => history.push(path)}
//         className={active ? "nav text-primary" : "nav"}
//       >
//         {title}
//       </NavLink>
//     </NavItem>
//   );
// }

export default MainNavbar;
