import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Action: [
    {
      MovieName: "Crushing it"
    },
    {
      MovieName: "Zero to one"
    },
    {
      MovieName: "Shoe - Dog"
    }
  ],
  Fiction: [
    {
      MovieName: "Lord of the Rings"
    },
    {
      MovieName: "The great Gatsby"
    },
    {
      MovieName: "Pride and Prejudice"
    }
  ],
  Horror: [
    {
      MovieName: "Dracula"
    },
    {
      MovieName: "The bird box"
    },
    {
      MovieName: "The exorcist"
    }
  ]
};

var QuoteList = Object.keys(dataBase);

export default function App() {
  const [ret, setret] = useState("Action");

  function clickHandler(items) {
    var d = items;
    setret(d);
  }

  return (
    <div className="App">
      <h1>Book Recommendation </h1>
      <h2>Select Genre :- </h2>
      <div>
        {QuoteList.map((items) => {
          return (
            <button
              onClick={() => clickHandler(items)}
              key={items}
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "black",
                color: "aqua"
              }}
            >
              {items}{" "}
            </button>
          );
        })}
      </div>

      <hr />

      <div>{ret}</div>

      <div>
        {dataBase[ret].map((yolo) => {
          return (
            <div>
              <ul
                style={{
                  listStyle: "none"
                }}
              >
                <li
                  style={{
                    margin: "auto",
                    border: "3px solid white",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    maxWidth: "80%",
                    color: "aqua"
                  }}
                >
                  {" "}
                  <div
                    style={{
                      padding: "1rem",
                      fontSize: "larger"
                    }}
                  >
                    {yolo.MovieName}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
