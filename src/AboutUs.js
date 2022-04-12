import { Activity } from "react-feather";
import { Col, Row } from "reactstrap";
import {
  backgroundColor,
  darkerColor,
  lighterColor,
  lighterText,
} from "./variables";

export default function AboutUs() {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Row className="m-0">
        <Col className="offset-1 mt-4">
          <img
            src={require("./assess/img/hero1.jpg")}
            alt="hero 1"
            className="img-fluid"
            style={{ borderRadius: 30, height: "80%" }}
          />
        </Col>
        <Col className="align-self-center align-middle">
          <center>
            <div
              className="py-3 m-3"
              style={{
                backgroundColor: lighterColor,
                width: "40%",
                borderRadius: 10,
              }}
            >
              <Activity /> About us
            </div>
          </center>
          <div
            className="display-4"
            style={{ fontWeight: "bold", color: darkerColor }}
          >
            Access to therapists and expert advice tailored to you.
          </div>
          <p
            className="mt-2 "
            style={{ color: lighterText, fontSize: "18px" }}
          >
            We are building a global solution for mental healthcare, helping
            young adults recover from depression, trauma, heart break, burn out,
            addiction, and other mental health-related situations, leveraging
            expert psychologists to provide on-demand personalized mental health
            care and therapy for individuals to unleash their inner genius and
            for organizations to help their workforce stay productive.
          </p>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}
