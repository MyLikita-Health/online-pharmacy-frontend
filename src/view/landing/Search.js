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

export function ItemCard({ item, display = false }) {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ height: "13em" }} className="shadow">
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
      </Card>
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
              <Row className="p-0 m-0">
                {drugList.map((item, i) => (
                  <Col md={3}>
                    <ItemCard item={item} />
                  </Col>
                ))}
              </Row>
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
