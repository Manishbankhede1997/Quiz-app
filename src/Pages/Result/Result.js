import "./Result.css";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result({ name, score }) {
  const navigation = useNavigate();

  useEffect(() => {
    if (!name) {
      navigation("/");
    }
  }, [name, navigation]);
  return (
    <div className="result">
      <span className="resultScore">Final Score : {score} </span>
      <br />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="/"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        Go To HomePage
      </Button>
      <br />
      <span style={{ fontSize: 25, fontWeight: "bold" }}>Thank You</span>
    </div>
  );
}

export default Result;
