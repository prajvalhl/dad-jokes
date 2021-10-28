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
          Accept: "application/json",
          "User-Agent": "Dad Jokes (https://github.com/prajvalhl/dad-jokes)"
        }
      });
      setJoke(response.data.joke);
    } catch (e) {
      alert("Something wrong with the server! try again after sometime!");
    }
  }
  return (
    <div>
      <h2 className="jokeText">{joke}</h2>
      <button onClick={getJokeFromServer}>Tell me Another!</button>
    </div>
  );
}
