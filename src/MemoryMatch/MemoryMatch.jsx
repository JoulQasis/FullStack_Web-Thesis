import React from "react";
import MemoryMatchCss from "./MemoryMatch.module.css";
import { useEffect, useState } from "react";

function MemoryMatch() {
  const [levels, setLevels] = useState(1);

  if (levels === 1) {
    var cardArray = [
      {
        name: "cat",
        img: require("./img/cat.png"),
      },
      {
        name: "dog",
        img: require("./img/dog.png"),
      },
      {
        name: "frog",
        img: require("./img/frog.png"),
      },
      {
        name: "pizza",
        img: require("./img/pizza.png"),
      },

      {
        name: "hotdog",
        img: require("./img/hotdog.png"),
      },
      {
        name: "fries",
        img: require("./img/fries.png"),
      },
    ];
  } else if (levels === 2) {
    cardArray = [
      {
        name: "cat",
        img: require("./img/cat.png"),
      },
      {
        name: "dog",
        img: require("./img/dog.png"),
      },
      {
        name: "frog",
        img: require("./img/frog.png"),
      },
      {
        name: "pizza",
        img: require("./img/pizza.png"),
      },

      {
        name: "hotdog",
        img: require("./img/hotdog.png"),
      },
      {
        name: "fries",
        img: require("./img/fries.png"),
      },
      {
        name: "panda",
        img: require("./img/panda.png"),
      },
      {
        name: "bee",
        img: require("./img/bee.png"),
      },
    ];
  } else {
    cardArray = [
      {
        name: "cat",
        img: require("./img/cat.png"),
      },
      {
        name: "dog",
        img: require("./img/dog.png"),
      },
      {
        name: "frog",
        img: require("./img/frog.png"),
      },
      {
        name: "pizza",
        img: require("./img/pizza.png"),
      },

      {
        name: "hotdog",
        img: require("./img/hotdog.png"),
      },
      {
        name: "fries",
        img: require("./img/fries.png"),
      },
      {
        name: "panda",
        img: require("./img/panda.png"),
      },
      {
        name: "bee",
        img: require("./img/bee.png"),
      },
      {
        name: "penguin",
        img: require("./img/penguin.png"),
      },
      {
        name: "elephant",
        img: require("./img/elephant.png"),
      },
    ];
  }
  cardArray = [...cardArray, ...cardArray];
  // random sort the array elements
  cardArray.sort(() => 0.5 - Math.random());
  let cardsChosen = [];
  let cardsChosenIds = [];
  var cardsWon = [];

  useEffect(() => {
    var gridDisplay = document.getElementById("grid");
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", require("./img/blank.jpg"));
        card.setAttribute("data-id", i);
        card.setAttribute("width", 225);
        card.setAttribute("height", 250);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
      }
    }

    createBoard();
  }, []);

  function startGame() {
    cardArray.sort(() => 0.5 - Math.random());
    var gameButton = document.getElementById("gameB");
    gameButton.innerText = "Start Game?";

    var results = document.getElementById("result");
    var gridDisplay = document.getElementById("grid");
    results.innerHTML = `Level : ${levels} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${cardsWon.length}`;
    gridDisplay.innerHTML = " ";

    if (levels === 1) {
      function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement("img");
          card.setAttribute("src", require("./img/blank.jpg"));
          card.setAttribute("data-id", i);
          card.setAttribute("width", 225);
          card.setAttribute("height", 250);
          card.addEventListener("click", flipCard);
          gridDisplay.appendChild(card);
        }
      }
      createBoard();
    } else if (levels === 2) {
      function createBoard2() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement("img");
          card.setAttribute("src", require("./img/blank.jpg"));
          card.setAttribute("data-id", i);
          card.setAttribute("width", 225);
          card.setAttribute("height", 190);
          card.addEventListener("click", flipCard);
          gridDisplay.appendChild(card);
        }
      }
      createBoard2();
    } else {
      function createBoard3() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement("img");
          card.setAttribute("src", require("./img/blank.jpg"));
          card.setAttribute("data-id", i);
          card.setAttribute("width", 180);
          card.setAttribute("height", 180);
          card.addEventListener("click", flipCard);
          gridDisplay.appendChild(card);
        }
      }
      createBoard3();
    }
  }
  // function for flipping a card on a click button.
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 250);
    }
  }

  // checking if the cards are matching
  function checkMatch() {
    const cards = document.querySelectorAll("#grid img");
    if (cardsChosenIds[0] === cardsChosenIds[1]) {
      cards[cardsChosenIds[0]].setAttribute("src", require("./img/blank.jpg"));
      cards[cardsChosenIds[1]].setAttribute("src", require("./img/blank.jpg"));
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[cardsChosenIds[0]].setAttribute("src", require("./img/white.png"));
      cards[cardsChosenIds[1]].setAttribute("src", require("./img/white.png"));
      cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
      cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[cardsChosenIds[0]].setAttribute("src", require("./img/blank.jpg"));
      cards[cardsChosenIds[1]].setAttribute("src", require("./img/blank.jpg"));
    }
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
      setLevels((levels) => levels + 1);
      var gridDisplay = document.getElementById("grid");
      gridDisplay.innerHTML =
        "<--- Next level &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; YOU GOT THEM ALL RIGHT!!  ";
      var gameButton = document.getElementById("gameB");
      gameButton.innerText = " Next Level?";
    }
    var results = document.getElementById("result");
    results.innerHTML = `Level : ${levels} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${cardsWon.length}`;
  }

  return (
    <main className={MemoryMatchCss.main}>
      <h1 className={MemoryMatchCss.score} id="result">
        Level : {levels} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : 0
      </h1>
      <div className={MemoryMatchCss.reloadB} >
        <button
          className={MemoryMatchCss.startbutton}
          onClick={() => startGame()}
          id="gameB"
        >
          Start Game?
        </button>
      </div>
      <div className={MemoryMatchCss.grid} id="grid"></div>
    </main>
  );
}
export default MemoryMatch;
