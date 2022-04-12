import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { backgroundColor, primaryColor } from "../variables";

function HorizontalMenu(props) {
  const location = useLocation();
  const active = location.pathname.includes(props.route);
  const _active = props.active ? props : active;
  const navigate = useNavigate();
  return (
    <div
      {...props}
      onClick={() => navigate(props.route)}
      className="list-group-item list-group-item-action"
      style={
        _active
          ? {
              // border: `1px solid `,
              // backgroundColor: "#e1eaf4",
              borderLeft: `7px solid ${primaryColor}`,
              cursor: "pointer",
              fontSize: "17px",
            }
          : {
              // border: `1px solid`,
              cursor: "pointer",
              fontSize: "17px",
              backgroundColor: backgroundColor,
              color: "f1f1f1",
            }
      }
    >
      {props.children}
    </div>
  );
}

export default HorizontalMenu;
