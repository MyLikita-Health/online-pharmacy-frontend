import React from "react";
import { Button } from "reactstrap";
import { primaryColor } from "../variables";
// import { primaryColor } from '../../theme';

function CustomButton(props) {
  return (
    <Button
      // color="primary"
      style={{
        backgroundColor: primaryColor,
        borderColor: primaryColor,
      }}
      className={props.className}
      onClick={props.handleSubmit}
      {...props}
      disabled={props.loading || props.disabled}
    >
      {props.loading && (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.children}
    </Button>
  );
}

export default CustomButton;
