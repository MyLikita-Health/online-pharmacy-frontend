import React from "react";
import { Card } from "reactstrap";

export default function CustomCard(props) {
  return (
    <Card {...props} style={{ borderRadius: 10,height: props.height || "60vh", backgroundImage:props.backgroundImage }} className="p-3 m-2">
      {props.children}
    </Card>
  );
}
