import React, { useEffect, useState } from "react";
import axios from "axios";

export function GetDadJoke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJokeFromServer();
  }, []);

  async function getJokeFromServer() {
    const dadJokeUri = "https://icanhazdadjoke.com";
    try {
      const response = await axios.get(dadJokeUri, {
        headers: {
          Accept: "application/json"
        }
      });
      setJoke(response.data.joke);
    } catch (e) {
      alert("Something wrong with the server! try again after sometime!");
    }
  }
  return (
    <div>
      <h2 className="jokeText">
        {joke}In publishing and graphic design, Lorem ipsum is a placeholder
        text commonly used to demonstrate the visual form of a document{" "}
      </h2>
      <button onClick={getJokeFromServer}>Tell me Another!</button>
    </div>
  );
}