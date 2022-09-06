// import { FOCUSAB-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "reactstrap";
import CustomScrollbar from "../../component/CustomScrollbar";
import useQuery from "../../helpers/useQuery";
// import { letterList } from "./component";
import { ItemCard } from "./Search";

export default function ShopList() {
const [loading,setLoading]=useState(false)
  const [results,setResults]=useState([])
  const getDrugList = ()=>{
    setLoading(true);
    fetch("https://yge.wvi.mybluehost.me/test/online-pharmacy-backend/drug-list"
    ).then((resp)=>resp.json()).then((data)=>{
      setResults(data.results)
      console.log("ddddddddddd",data.results)
      setLoading(false);
   })
   .catch((err) => {
    setLoading(false);
    console.log(err);
  });
  }
  useEffect(()=>{
    getDrugList()
  },[])
  const query = useQuery();
  const store = query.get("store");
  const shoplist = results.filter((i) => i.store === store);
  useEffect(() => {
    document.title = store;
  }, [store]);


  return (
    <div>
      <Row className="p-0 m-0">
        {/* {JSON.stringify(item_name)} */}
        <Col md={1}></Col>
        <Col md={10}>
          <center>
            <h1 className="result">{store}</h1>
          </center>

            <center>
          {loading && (
                <Spinner
                color="primary"
                style={{
                  height: '3rem',
                  width: '3rem'
                }}
              >
                Loading...
              </Spinner>
              )}</center>
          <div className="ahmad">
            <CustomScrollbar height="75vh">
              <Row className="p-0 m-0">
                {shoplist.map((item, i) => (
                 
                    <ItemCard item={item} display={true} />
                 
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
