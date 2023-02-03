import React from "react";
import QuickReflexesCss from "./QuickReflexes.module.css";
import { useEffect} from "react";


function QuickReflexes() {

  let cardsChosenIds = [];
  let cardsWon = [];
  var cardsChosenIdsN;
  var cardsChosenIdsToN;
  let shuffled;
  var scores = [];

  useEffect(() => 
  {
    const gridDisplay = document.getElementById("grid");
    function createBoard() 
    {
      for (let i = 0; i < 63; i++) 
      {
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

  function startGame() 
  {
    let array = Array.from({ length: 63 }, () =>
    Math.floor(Math.random() * 63)
    );
    shuffled = [...array].sort(() => 0.5 - Math.random()).slice(0, 1);
    const cards = document.querySelectorAll("#grid img");
    cardsWon = shuffled.slice(0, 1);
    for (let i = 0; i <= shuffled.length; i++) 
    {
      cards[shuffled[i]].setAttribute("src", require("./img/pick.jpg"));
      setTimeout(function() 
      {
        for (let i = 0; i <= shuffled.length; i++) 
        {
          cards[shuffled[i]].setAttribute("src", require("./img/blank.jpg"));
        }
      }, 500);
    }
    shuffled.pop()
  }

  function startGameLevel2() 
  {
    let array = Array.from({ length: 63 }, () =>
    Math.floor(Math.random() * 63)
    );
    shuffled = [...array].sort(() => 0.5 - Math.random()).slice(0, 1);
    const cards = document.querySelectorAll("#grid img");
    cardsWon = shuffled.slice(0, 1);
    for (let i = 0; i <= shuffled.length; i++) 
    {
      cards[shuffled[i]].setAttribute("src", require("./img/pick.jpg"));
      setTimeout(function() 
      {
        for (let i = 0; i <= shuffled.length; i++) 
        {
          cards[shuffled[i]].setAttribute("src", require("./img/blank.jpg"));
        }
      }, 150);
    }
    shuffled.pop()
  }

  function startGameLevel3() 
  {
    let array = Array.from({ length: 63 }, () =>
    Math.floor(Math.random() * 63)
    );
    shuffled = [...array].sort(() => 0.5 - Math.random()).slice(0, 2);
    const cards = document.querySelectorAll("#grid img");
    cardsWon = shuffled.slice(0, 1);
    for (let i = 0; i <= shuffled.length; i++) 
    {
      cards[shuffled[i]].setAttribute("src", require("./img/pick.jpg"));
      setTimeout(function() 
      {
        for (let i = 0; i <= shuffled.length; i++) 
        {
          cards[shuffled[i]].setAttribute("src", require("./img/blank.jpg"));
        }
      }, 80);
    }
    shuffled.pop()
  }
  
  let Level = 1;

  function flipCard() 
  {
    const cardId = this.getAttribute("data-id");
    cardsChosenIds.push(cardId);
    cardsChosenIdsN = cardsChosenIds.map(parseInt)
    cardsChosenIdsToN = Number(cardsChosenIdsN.join(''))
    if (scores.length < 5)
    {
      Level = 1;
      setTimeout(checkMatch, 250);
    }else if (scores.length >5 && scores.length <15)
    {
      Level = 2;
      setTimeout(checkMatch2, 250);
    }else
    {
      Level = 3;
      setTimeout(checkMatch3, 250);
    }
  }

  function checkMatch() {
    var results = document.getElementById("result");
    
    if (cardsWon[0] === cardsChosenIdsToN) 
    {
      scores.push(1)
      console.log("yep");
      cardsChosenIds.pop();
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;
      setTimeout(startGame, 250);
    } else 
    {
      scores.pop()
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;

      console.log("nope")
      cardsChosenIds.pop();
      setTimeout(startGame, 250);
    }
  }

  function checkMatch2() {
    var results = document.getElementById("result");
    if (cardsWon[0] === cardsChosenIdsToN) 
    {
      scores.push(1)
      console.log("yep");
      cardsChosenIds.pop();
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;
      setTimeout(startGameLevel2, 250);
    } else 
    {
      scores.pop()
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;

      console.log("nope")
      cardsChosenIds.pop();
      setTimeout(startGameLevel2, 250);
    }
  }

  function checkMatch3() {
    var results = document.getElementById("result");
    if (cardsWon[0] === cardsChosenIdsToN) 
    {
      scores.push(1)
      console.log("yep");
      cardsChosenIds.pop();
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;
      setTimeout(startGameLevel3, 250);
    } else 
    {
      scores.pop()
      results.innerHTML = `Level : ${Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${scores.length}` ;

      console.log("nope")
      cardsChosenIds.pop();
      setTimeout(startGameLevel3, 250);
    }
  }

  // to disable the start button.
  window.onload = (e) => 
  {
    const myButton = document.getElementById("startbtn");
    myButton.onclick = function () 
    {
      myButton.disabled = true;
      setTimeout(function () 
      {
        myButton.disabled = false;
      }, 500);
    };
  };

  return (
    <main className={QuickReflexesCss.main}>
      <h1 className={QuickReflexesCss.score} id="result">
      Level : {Level} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : 0
      </h1>
      <div className={QuickReflexesCss.reloadB} id="startB">
        <button className={QuickReflexesCss.startbutton} id="startbtn" onClick={startGame}>
          Start
        </button>
      </div>
      <div className={QuickReflexesCss.grid} id="grid"></div>
    </main>
  );
}

export default QuickReflexes;
