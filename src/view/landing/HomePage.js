/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./css/general.css";
// import "./css/queries.css";
import "./css/style.css";
// import './css/new.css'
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row
} from "reactstrap";
import { Camera, Mic, UploadCloud } from "react-feather";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={4} />
          <Col>
            <h1 className="display-1 mt-5">Online Pharmacy</h1>
          </Col>
          <Col md={3} />
        </Row>
        {/* <Container className=" bg-light" style={{ borderRadius: "100px", }}> */}
          <Row className="mt-5   " style={{ borderRadius: "100px" }}>
            <Col md={2} />
            <Col>
              <InputGroup className="cont ">
              
                <Input
                  className="input"
                  style={{
                    // borderLeft: "none",
                    borderRight: "none",
                    padding: "20px"
                  }}
                />
                <InputGroupText
                  className="bg-white"
                  style={{ borderLeft: "none", borderRight: "none" }}
                >
                  <UploadCloud />
                </InputGroupText>
                <InputGroupText
                  style={{ borderLeft: "none" }}
                  className="bg-white "
                >
                  <Mic />
                </InputGroupText>
                <InputGroupText
                  className="bg-white   "
                  style={{ borderLeft: "none" }}
                >
                  <Camera />
                </InputGroupText>
              </InputGroup>
              {/* <InputGroup className="grp" style={{borderRadius:'100px'}}>
              <InputGroupText  className="grpicon">
                <Mic />
              </InputGroupText >
              <Input
                style={{
                  // borderLeft: "none",
                  // borderRight: "none",
                  // borderRadius: "100px",
                  // padding: "20px"
                }}
                className="edit"

              />
            </InputGroup> */}
            </Col>
            <Col md={2} />
          </Row>
        {/* </Container> */}
      </Container>
    </>
  );
}
