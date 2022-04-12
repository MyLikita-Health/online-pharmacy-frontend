import React from "react";
import { Sunrise, TrendingUp, Wind } from "react-feather";
import { backgroundColor, darkerColor, lighterColor, lighterText } from "./variables";

export default function Services() {
    let styles = {
        backgroundColor: lighterColor,
            paddingTop: "1%",
            // color: "white",
            height: "30%",
            textAlign: "center",
            borderRadius: "10px",
            width: "30%",
            paddingBottom: "4%",
            fontSize: "24px",
            fontWeight: "bolder",
    }
  return (
    <div style={{ backgroundColor: backgroundColor }} className="px-4 py-5">
      <center>
        <h1
          className="display-4"
          style={{ fontWeight: "bold", color: darkerColor }}
        >
          Our services
        </h1>

        <p className="" style={{ color: lighterText, fontSize: "20px" }}>
          Our mental health professionals, experts and counsellors are happy to
          support you
        </p>
      </center>

      <div className="row m-0 ">
        <div
          className="container"
          style={styles}
        >
          Mental Healthcare
          <div className="mt-4">
              <Sunrise size={155} />
          </div>
        </div>
        <section
          className="container"
          style={styles}
        >
          Expert Advisory  <div className="mt-4">
              <Wind size={155} />
          </div>
        </section>

        <div
          className="container"
          style={styles}
        >
          Organizational Improvement
          <div className="mt-3">
              <TrendingUp size={155} />
          </div>
        </div>
      </div>
    </div>
  );
}
