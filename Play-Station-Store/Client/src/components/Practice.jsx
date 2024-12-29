import React, { useEffect, useState } from "react";
import "../../src/assets/styles/Practise.css";
import axios from "axios";

function Practice() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="practice">Practise</div>

      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={index}>{joke.joke}</div>;
      })}
    </>
  );
}

export default Practice;
