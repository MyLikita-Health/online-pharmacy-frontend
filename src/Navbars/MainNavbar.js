// import React from "react";
// import "./nav.css";
// // JavaScript plugin that hides or shows a component based on your scroll
// // import Headroom from "headroom.js";
// // reactstrap components
// import { Navbar, NavbarToggler, Button } from "reactstrap";
// // import { generalRoot } from 'views/app/routes/helpers'
// // import logo from '../../assets/images/logo.png'
// // import NavItems from "./NavItems";
// import Home from "../view/landing/HomePage";
// import { useLocation, useNavigate } from "react-router-dom";
// import { LogOut, ShoppingCart } from "react-feather";
// // import { logout } from 'redux/actions/auth'

// const MainNavbar = () => {
//   // const history = (f) => f
//   const location = useLocation();
//   const navigate = useNavigate();
//   // const logout = () => {}
//   // const route = ''
//   // // location.pathname.includes(generalRoot)
//   // //   ? 'GENERAL TAKAFUL'
//   // //   : 'FAMILY TAKAFUL'
//   // const dispatch = useDispatch()
//   // const _logout = () => {
//   //   dispatch(
//   //     logout(() => {
//   //       history.push('/login-page')
//   //     }),
//   //   )
//   // }
//   const landingPage = location.pathname === "/";
//   return (
//     <Navbar
//       className="navbar-main mb-2 py-0"
//       expand="md"
//       fixed="top"
//       style={{ maxHeight: 50, backgroundColor: "#f2f2f2" }}
//     >
//       {/* <Container> */}
//       {/* <NavbarBrand className="mr-lg-5 " to="/" tag={Link}>
//         <div>
//           <img alt="logo" src={logo} height="40" />
//         </div>
//       </NavbarBrand> */}
//       <div className="text-center">
//         <h1 className="text-white text-center  ml-lg-5">{""}</h1>
//       </div>
//       {!landingPage && <Home display={true} />}
//       {/* <NavItems /> */}

//       <NavbarToggler onClick={() => {}} />
//       {/* <Collapse
//         toggler="#navbar_global"
//         navbar
//         className={"d-flex flex-direction-row justify-content-between"}
//         // onExiting={this.onExiting}
//         // onExited={this.onExited}
//       >
//         <div className="navbar-collapse-header">
//           <Row>
//             <Col className="collapse-brand" xs="6">
//               <Link to="/">
//                 <img
//                   alt="..."
//                   src={require("../../logo.svg")}
//                   style={{ minHeight: 45 }}
//                 />
//               </Link>
//             </Col>
//             <Col className="collapse-close" xs="6">
//               <button className="navbar-toggler" id="navbar_global">
//                 <span />
//                 <span />
//               </button>
//             </Col>
//           </Row>
//         </div>
//       </Collapse> */}

//       <div className="">
//         {" "}
//         <Button
//           color="light"
//           className="m-1"
//           onClick={() => navigate("/new-cart")}
//         >
//           <ShoppingCart />
//         </Button>
//         <Button className="" color="danger" onClick={() => {}}>
//           {/* <FaPowerOff size="20px" style={{ marginRight: '10px' }} /> */}
//           <LogOut />
//           logout
//         </Button>
//       </div>
//       {/* </Container> */}
//     </Navbar>
//   );
// };

// // function CustomNavItem({ title = "", location, history, path }) {
// //   let active = location.pathname.includes(path);
// //   return (
// //     <NavItem
// //       className={active ? "bg-default border border-primary px-2" : ""}
// //       style={{ cursor: "pointer" }}
// //     >
// //       <NavLink
// //         onClick={() => history.push(path)}
// //         className={active ? "nav text-primary" : "nav"}
// //       >
// //         {title}
// //       </NavLink>
// //     </NavItem>
// //   );
// // }

// export default MainNavbar;







import React, {  useState } from "react";
import {
  Camera,
  ChevronDown,
  HelpCircle,
  Mic,
  Search,
  ShoppingCart,
  User,
} from "react-feather";
import {
  // Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  // Modal,
  // ModalBody,
  NavItem,
  Row,
} from "reactstrap";
import "./nav.css"
import { useNavigate ,useLocation} from "react-router";
import { useSelector } from "react-redux";
// import Home from "../view/landing/HomePage";
import { AsyncTypeahead,  } from "react-bootstrap-typeahead";
// import { letterList } from "../view/landing/component";
export default function ShopNavbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  const location = useLocation();
  const landingPage = location.pathname === "/";
  // const [modal, setModal] = useState(false);
  // const toggleModal = () => setModal(!modal);
  const cart = useSelector(
    (state) => state.cart.getCart
  );

  const navigate = useNavigate();
  // const [itemName, setItemName] = useState("");
  const [results,setResults]=useState([])
  // const getDrugList = ()=>{
  //   fetch("http://localhost:34567/drug-list"
  //   ).then((resp)=>resp.json()).then((data)=>{
  //     setResults(data.results)
  //   })
  // }
  // useEffect(()=>{
  //   getDrugList()
  // },[])
  const [isLoading,setIsLoading]=useState(false)
  // const [options,setOptions]=useState([])
   const handleSearch =(query)=>{
    setIsLoading(true)
    fetch(`https://yge.wvi.mybluehost.me/test/online-pharmacy-backend/get-drug-byName?drug_name=${query}`
    ).then((resp)=>resp.json()).then((data)=>{
      setResults(data.results)
    })

   }
   const filterBy =()=>true;
  // const navigate = useNavigate();
  return (
    <div>
      <Row className="nav-row">
        <Col md={2} className="col1">
          <h2>Online Pharmacy</h2>
        </Col>
        <Col md={6} className="col2 text-center">
          
        {!landingPage &&   <div className="pharmacy--search">
            <div className="pharmacy--searchbar__alignment">
              <div className="search">
                <Search />
              </div>
              <div className="searchbox">
                <div className="searchbox__alignment">
                <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="drug_name"
      minLength={3}
      onSearch={handleSearch}
      options={results}
      placeholder="Search for a Drug..."
      className="searchtext"
      inputProps={{
        // className: "searchtext",
        style: {
          border: "0px",
          outline: "0px",
          fontSize: "16px",
          boxShadow: "none",
          // paddingTop: -30,
        },
      }}
      renderMenuItemChildren={(option: Item) => (
        <>
         
          <span onClick={()=>navigate(`/search?store=${option.drug_name}`)}>{option.drug_name}</span>
        </>
      )}
    />
                  {/* <Typeahead
                    id="basic-typeahead-single"
                    labelKey="drug_name"
                    onInputChange={(e) => {
                      if (e.length) {
                        setItemName(e[0].drug_name);
                      }
                    }}
                    //SELECT * FROM `pharm_store` WHERE drug_name like '%gtt an%'
                    onChange={(e) => {
                      if (e.length) {
                        setItemName(e[0].drug_name);
                        navigate(`/search?drug_name=${e[0].drug_name}`);
                      }
                      //  navigate(`/home/re`sult?item_name=${search[0].itemName}`)
                    }}
                    options={results}
                    placeholder="Search here..."
                    className="searchtext"
                    maxlength="2048"
                    aria-autocomplete="both"
                    aria-haspopup="false"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    autofocus=""
                    role="combobox"
                    spellcheck="false"
                    title="Search"
                    aria-label="Search"
                    inputProps={{
                      // className: "searchtext",
                      style: {
                        border: "0px",
                        outline: "0px",
                        fontSize: "16px",
                        boxShadow: "none",
                        // paddingTop: -30,
                      },
                    }}
                  /> */}
                </div>
              </div>
              <div className="actions">
                <div className="mic">
                  <Mic style={{ marginBottom: 10 }} />
                </div>
                {/* <div className="upload">
                 <Upload />
                </div> */}
                <div className="camera">
                  <Camera style={{ marginBottom: 10 }} />
                </div>
              </div>
            </div>
          </div>}
        </Col>
        <Col md={4} className="col3">
          <nav>
            <ul>
              <li>
                <Dropdown className="d" isOpen={open} toggle={toggle}>
                  <DropdownToggle
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "rgb(99, 99, 99)",
                    }}
                  >
                    <User size="1.5em" />Legend<ChevronDown />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem className="drop-down-item" onClick={()=>navigate('/account')} >
                      Account
                    </DropdownItem>
                    <DropdownItem onClick={()=>navigate('/account/orders')}  className="drop-down-item">
                      Orders
                    </DropdownItem>
                    <DropdownItem className="drop-down-item" divider />
                    <DropdownItem onClick={""} className="drop-down-item">
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown><NavItem style={{backgroundColor:"white"}}>
                  {/* <Button  className="btn-default">Sign Up</Button> */}
                  <p style={{color:"white"}}>Login</p>
                  
              </NavItem>
              <NavItem>
                  <p style={{color:"white"}}>Login</p>
              </NavItem>
              <NavItem>
                  <p style={{color:"white"}}>Login</p>
              </NavItem>
              </li>
              <li>
                <Dropdown className="d" isOpen={open1} toggle={toggle1}>
                  <DropdownToggle
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "rgb(99, 99, 99)",
                    }}
                  >
                    <HelpCircle size="1.5em" /> Help <ChevronDown />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem className="drop-down-item">
                      Settings
                    </DropdownItem>
                    <DropdownItem className="drop-down-item">
                      Help & Support
                    </DropdownItem>
                    <DropdownItem className="drop-down-item" divider />
                    <DropdownItem className="drop-down-item">
                      About us
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li className="btn" onClick={() => navigate("/new-cart")}>
                {/* <div className="cart-div"> */}
                <ShoppingCart size="1.5em" /> Cart
                <span className="cart-count">{cart&&cart.length}</span>
                {/* </div> */}
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      {/* <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody>
                  <AuthModal type={auth_type} toggle={toggleModal} setType={setAuthType} />
                </ModalBody>
            </Modal> */}
            {/* {itemName} */}
    </div>
  );
}

