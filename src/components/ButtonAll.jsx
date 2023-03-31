import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ sortall }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          onClick={sortall}
          size="large"
          style={{ backgroundColor: "#00ff89", color: "#1c2c4c" }}
        >
          All
        </Button>
      </div>
    </>
  );
}

export default ButtonAll;
