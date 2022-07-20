import React from "react";
import { ArrowDownLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function BackButton({ text = "Back", size = "", className = "" }) {
  const history = useNavigate();

  return (
    <button
      className={`btn btn-default btn-${size} ${className}`}
      onClick={() => history.goBack()}
    >
      <span className="d-flex flex-direction-row align-items-center text-primary">
        <ArrowDownLeft className="mr-1" size={20} />
        {text}
      </span>
    </button>
  );
}

export default BackButton;
