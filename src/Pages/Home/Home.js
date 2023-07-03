import React from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Errormessage/Error";
function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = () => {
    if (!category || !name || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigation("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz-Setting</span>
        <div className="setting-selector">
          {error && <Error>please fill the form</Error>}
          <TextField
            style={{ marginBottom: 20, backgroundColor: "white" }}
            label="Enter your Name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            select
            label="Select Category"
            style={{ marginBottom: 30, backgroundColor: "white" }}
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories?.map((cat) => {
              return (
                <MenuItem key={cat.value} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            label="Select difficulty"
            style={{ marginBottom: 30, backgroundColor: "white" }}
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start-Quiz
          </Button>
        </div>
      </div>
      <img src="undraw.png" alt="Quipic" className="banner" />
    </div>
  );
}

export default Home;
