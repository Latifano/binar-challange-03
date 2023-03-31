import React from "react";
import { Button } from "react-bootstrap";

function ButtonSearch({ click, val }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          size="large"
          style={{
            backgroundColor: "#00ff89",
            color: "#1c2c4c",
          }}
          onClick={click}
        >
          {val}
        </Button>
      </div>
    </>
  );
}

export default ButtonSearch;
