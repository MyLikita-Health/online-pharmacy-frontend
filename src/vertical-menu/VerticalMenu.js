import React from "react";
import { primaryColor } from "../variables";
function VerticalMenu(props) {
  return (
    <div className="list-group ml-2 my-0">
      {props.title ? (
        <span
          className="list-group-item list-group-item-action text-center font-weight-bold"
          style={{
            backgroundColor: primaryColor,
            color: "white",
            fontSize: "20px",
          }}
        >
          {props.title}
        </span>
      ) : null}
      {props.children}
    </div>
  );
}

export default VerticalMenu;
