import "./Quiz.css";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Questions from "../../Questions/Questions";
function Quiz({ name, questions, setQuestion, score, setScore }) {
  const [option, setOption] = useState();
  const [currQues, setcurrQues] = useState(0);
  console.log(questions);

  useEffect(() => {
    setOption(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="Quiz">
      <span className="subtitle">welcome : {name}</span>
      {questions ? (
        <>
          <div className="QuizItem">
            <span>{questions[currQues].category}</span>
            <span> score : {score}</span>
          </div>
          <Questions
            currQues={currQues}
            setcurrQues={setcurrQues}
            questions={questions}
            setQuestion={setQuestion}
            option={option}
            score={score}
            setScore={setScore}
            correct={questions[currQues]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={120}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz;
