import React from "react";
import { Button } from "react-bootstrap";

function ButtonSubmit({ onClicktoHome }) {
  return (
    <>
      <div className="d-grid gap-2 mt-4">
        <Button
          onClick={onClicktoHome}
          size="large"
          style={{ backgroundColor: "#00ff89", color: "#1c2c4c" }}
        >
          submit
        </Button>
      </div>
    </>
  );
}

export default ButtonSubmit;
