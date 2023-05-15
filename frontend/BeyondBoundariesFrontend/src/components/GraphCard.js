import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Page.css";

function Graph() {
  const [ipl, setIpl] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/cards-predef")
      .then((response) => {
        setIpl(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const {
    catches_2020,
    catches_2021,
    catches_2022,
    orange_2020,
    orange_2021,
    orange_2022,
    purple_2020,
    purple_2021,
    purple_2022,
  } = ipl;

  return (
    <>
      <div>
        <div className="card" id="card-flex">
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFA07A, #FF8C00)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {orange_2022?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{orange_2022.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #6A5ACD, #9400D3)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Purple Cap - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {purple_2022?.x.map((bowler, index) => (
                    <li key={index}>
                      {bowler}:{purple_2022.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFFF00, #FFD700)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading "> Most Catches - 2022</p>
              </div>
              <div className="card-content">
                <ul>
                  {catches_2022?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{catches_2022.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card" id="card-flex">
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFA07A, #FF8C00)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2021</p>
              </div>
              <div className="card-content">
                <ul>
                  {orange_2021?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{orange_2021.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #6A5ACD, #9400D3)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Purple Cap - 2021</p>
              </div>
              <div className="card-content">
                <ul>
                  {purple_2021?.x.map((bowler, index) => (
                    <li key={index}>
                      {bowler}:{purple_2021.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFFF00, #FFD700)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading "> Most Catches - 2021</p>
              </div>
              <div className="card-content">
                <ul>
                  {catches_2021?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{catches_2021.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card" id="card-flex">
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFA07A, #FF8C00)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Orange Cap - 2020</p>
              </div>
              <div className="card-content">
                <ul>
                  {orange_2020?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{orange_2020.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #6A5ACD, #9400D3)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading ">Purple Cap - 2020</p>
              </div>
              <div className="card-content">
                <ul>
                  {purple_2020?.x.map((bowler, index) => (
                    <li key={index}>
                      {bowler}:{purple_2020.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="card"
            id="card"
            style={{
              backgroundImage: "linear-gradient(to right, #FFFF00, #FFD700)",
              transition:
                "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#9400D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#6A5ACD";
            }}
          >
            <div className="card-body align-start">
              <div className="card-summary">
                <p className="card-heading "> Most Catches - 2020</p>
              </div>
              <div className="card-content">
                <ul>
                  {catches_2020?.x.map((player, index) => (
                    <li key={index}>
                      {player}:{catches_2020.y[index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;
