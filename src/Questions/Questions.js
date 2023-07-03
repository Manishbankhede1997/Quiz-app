import "./Question.css";
import React from "react";
import { useState } from "react";
import Error from "../components/Errormessage/Error";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Questions({
  currQues,
  setcurrQues,
  option,
  correct,
  questions,
  setQuestion,
  score,
  setScore,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigation = useNavigate();
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };
  const handleCheak = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
      setError(false);
    }
  };
  const handleNext = () => {
    if (currQues > 8) {
      navigation("/result");
    } else if (selected) {
      setcurrQues(currQues + 1);
      setSelected();
      setError(false);
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setcurrQues(0);
    setQuestion();
  };

  return (
    <div className="question">
      <h1>Question :{currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="option">
          {error && <Error>{error}</Error>}
          {option &&
            option.map((i) => (
              <button
                onClick={() => handleCheak(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 8 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
