import React, { Component } from "react";
import QuickReflexesCss from "./QuickReflexes.module.css";
import { useEffect, useState } from "react";


function QuickReflexes() {
  const cardArray = [
    {
      name: "pick",
      img: require("./img/pick.jpg"),
    },
  ];
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = []
  const [levels, setLevels] = useState(1);
  const [scores, setScores] = useState(0);

  useEffect(() => {
    const gridDisplay = document.getElementById("grid");
    function createBoard() {
      for (let i = 0; i < 63; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", require("./img/blank.jpg"));
        card.setAttribute("data-id", i);
        card.setAttribute("width", 100);
        card.setAttribute("height", 100);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
      }
    }
    createBoard();
  }, []);




  let shuffled;
  function startGame() {
    const array = Array.from({ length: 63 }, () =>
    Math.floor(Math.random() * 63)
    );
    console.log(array)
    console.log("array")
    shuffled = [...array].sort(() => 0.5 - Math.random()).slice(0, 1);
    const cards = document.querySelectorAll("#grid img");
    cardsWon = shuffled.slice(0, 1);
    console.log(cards)
    console.log("cards")
    console.log(cardsWon)
    console.log("cardsWon")
    for (let i = 0; i <= shuffled.length; i++) {
      cards[shuffled[i]].setAttribute("src", require("./img/pick.jpg"));
      setTimeout(function () {
        for (let i = 0; i <= shuffled.length; i++) {
          cards[shuffled[i]].setAttribute("src", require("./img/blank.jpg"));
        }
      }, 500);
    }
    shuffled.pop()
    console.log(shuffled)
    console.log("shuffled2")
  }
  var cardsChosenIdsN;
  var cardsChosenIdsToN;

  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosenIds.push(cardId);
    cardsChosenIdsN = cardsChosenIds.map(parseInt)
    cardsChosenIdsToN = Number(cardsChosenIdsN.join(''))
    if (true) {
      setTimeout(checkMatch, 250);
    }
  }

  function checkMatch() {
    // const cards = document.querySelectorAll("#grid img");
    if (cardsWon[0] === cardsChosenIdsToN) {
      console.log(cardsWon[0])
      console.log(cardsChosenIdsToN)
      console.log(cardsChosenIds)
      setScores (scores+1)
      cardsChosenIds.pop();
      console.log("hey there")
      console.log(cardsChosenIds)


    } else {
      console.log("nope")
      console.log(shuffled)
      console.log(cardsChosenIds)
      console.log("Idk")

      console.log(cardsWon)
      console.log(cardsWon[0])
      console.log(cardsChosenIdsToN)


    }


    var results = document.getElementById("result");
    results.innerHTML = `Level : ${levels} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores}`;
  }
  // to disable the start button.
  window.onload = (e) => {
    const myButton = document.getElementById("startbtn");
    myButton.onclick = function () {
      myButton.disabled = true;
      setTimeout(function () {
        myButton.disabled = false;
      }, 500);
    };
  };


  return (
    <main className={QuickReflexesCss.main}>
      <h1 className={QuickReflexesCss.score} id="result">
      Level : {levels} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : {scores}
      </h1>
      <div className={QuickReflexesCss.startB} id="startB">
        <button id="startbtn" onClick={startGame}>
          start
        </button>
      </div>
      <div className={QuickReflexesCss.grid} id="grid"></div>
    </main>
  );
}

export default QuickReflexes;
