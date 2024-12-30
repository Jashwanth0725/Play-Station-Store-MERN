import React, { useEffect, useState } from "react";
import "../../src/assets/styles/Practise.css";
import axios from "axios";

function Practice() {
  const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/jokes")
  //     .then((response) => {
  //       setJokes(response.data);
  //       console.log("Api response:", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jokes")
      .then((response) => {
        const data = response.data;
        console.log("API Data:", data);

        // Ensure jokes is an array
        if (Array.isArray(data)) {
          setJokes(data);
        } else if (data.jokes && Array.isArray(data.jokes)) {
          setJokes(data.jokes);
        } else {
          setJokes([]); // Default to an empty array
        }
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setJokes([]); // Fallback to empty array on error
      });
  }, []);

  return (
    <>
      <div className="practice">Practise</div>

      <p>Jokes : {jokes.length}</p>
      {jokes.map((item, index) => (
        <div key={index}>{item.joke}</div>
      ))}
    </>
  );
}

export default Practice;
