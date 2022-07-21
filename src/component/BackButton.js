import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function BackButton({ text = "Back", size = "", className = "", props }) {
  const navigate = useNavigate();

  return (
    <button
      className={`btn btn-default btn-${size} ${className}`}
      onClick={() => navigate.goBack()}
      {...props}
    >
      <span className="d-flex flex-direction-row align-items-center text-primary">
        <ArrowLeft className="mr-1" size={20} />
        {text}
      </span>
    </button>
  );
}

export default BackButton;
