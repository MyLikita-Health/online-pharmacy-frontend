/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ShoppingCart } from "react-feather";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
// import BackButton from "../../component/BackButton";
import CustomScrollbar from "../../component/CustomScrollbar";
import { formatNumber } from "../../helpers";
import useQuery from "../../helpers/useQuery";
// import { CARTLIST } from "../../redux/actions/types";
import { letterList } from "./component";
import "./seacrch.css";
import "./cart/card.css"
import drug from "./cart/dryug.jpg"
import drugs from "./cart/dryug.jpg"
import { useDispatch, useSelector } from "react-redux";

export function ItemCard({ item, display = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cart = useSelector(
    (state) => state.cart.getCart
  );
  const handleSubmit = (items)=>{
    dispatch({ type: "GETCART", payload: [...cart, items] });
   
  }
  return (
    <>
                          {/* {JSON.stringify(cart)} */}
  
            <div class="col-md-3">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <a href="#">
                            <img   key={item.id}
                                    src={item.img} class="img-center" onClick={() => navigate(`/store?storeName=${item.store_name}`)} />
                        </a>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <a href="#">
                            {item.itemName}
                            </a>
                        </h3>
                        <p class="product-description">
                            mg12 pottasium chloride
                        </p>
                        <p>₦{formatNumber(item.price)}</p>
                        <p onClick={() => navigate(`/store?storeName=${item.store_name}`)}
                style={{ cursor: "pointer" }}
                className="text-primary">Available at : {item.store_name}</p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                {/* <a href="#" class="bg-purple"></a>
                                <a href="#" class="bg-pink"></a>
                                <a href="#" class="bg-blue"></a> */}
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left" onClick={()=>handleSubmit(item)}>
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
       


   

      {/* <Card style={{ height: "13em" }} className="shadow">
        <img
          alt="Card image"
          src="https://picsum.photos/300/200"
          className="img-fluid"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/store?storeName=${item.store_name}`)}
        />
        <CardBody>
          <Row>
            <Col md={10}>
              <CardTitle tag="h5">{item.itemName}</CardTitle>
              <CardSubtitle
                className="mb-2 text-muted d-flex justify-content-between"
                tag="h6"
              >
                Price : ₦{formatNumber(item.price)}{" "}
                {display && (
                  <div className="d-flex">
                    <div className="m-2">
                      <ShoppingCart size={19} />
                    </div>
                    <div lassName="m-2">Save</div>
                  </div>
                )}
              </CardSubtitle>
              <CardText
                tag="h5"
                onClick={() => navigate(`/store?storeName=${item.store_name}`)}
                style={{ cursor: "pointer" }}
                className="text-primary"
              >
                Available at : {item.store_name}
              </CardText>
            </Col>
            <Col></Col>
          </Row>
        </CardBody>
      </Card> */}
    </>
  );
}
export default function Search() {
  const query = useQuery();
  const item_name = query.get("item_name");
  const drugList = letterList.filter((i) => i.itemName === item_name);
  // const [select, setSelect] = useState([]);
  // const dispatch = useDispatch();
  // const addToCart = (item) => {
  //   dispatch({
  //     type: CARTLIST,
  //     payload: item,
  //   });
  // };
  return (
    <div>
      {/* <div className='underline'></div> */}
      <div className="d-flex justify-content-between">
        {/* <BackButton color="primary" /> */}
      </div>
      <Row className="p-0 m-0">
        {/* {JSON.stringify(item_name)} */}
        <Col md={1}></Col>
        <Col md={10}>
          <center>
            <h1 className="result">Your Search Result</h1>
          </center>

          <div className="ahmad">
            <CustomScrollbar height="75vh">
            <div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
                {drugList.map((item, i) => (
              
                    <ItemCard item={item} />
                
                ))}
                 </div>
    </div>
</div>
            </CustomScrollbar>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
      <center>
        <h1 className="result">You make also like</h1>
      </center>
    </div>
  );
}
