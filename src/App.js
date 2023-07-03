import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestion(data.results);
  };
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(q.jpg)" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            exact
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestion={setQuestion}
              />
            }
          />
          <Route
            path="/result"
            exact
            element={<Result name={name} score={score} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
