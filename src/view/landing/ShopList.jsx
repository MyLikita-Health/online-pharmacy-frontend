import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import CustomScrollbar from "../../component/CustomScrollbar";
import useQuery from "../../helpers/useQuery";
import { letterList } from "./component";
import { ItemCard } from "./Search";

export default function ShopList() {
  const query = useQuery();
  const store_name = query.get("storeName");
  const shoplist = letterList.filter((i) => i.store_name === store_name);
  useEffect(() => {
    document.title = store_name;
  }, [store_name]);

  return (
    <div>
      <Row className="p-0 m-0">
        {/* {JSON.stringify(item_name)} */}
        <Col md={1}></Col>
        <Col md={10}>
          <center>
            <h1 className="result">{store_name}</h1>
          </center>

          <div className="ahmad">
            <CustomScrollbar height="75vh">
              <Row className="p-0 m-0">
                {shoplist.map((item, i) => (
                  <Col md={3}>
                    <ItemCard item={item} display={true} />
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
