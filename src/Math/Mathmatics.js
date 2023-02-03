import React from "react";
import mathCss from "./Math.module.css";

function Mathmatics() {

  // Game variables
  let score = 0;
  let level = 1;
  let problem = `x ? y`;

  // Generate a random math problem
  function generateProblem() 
  {
    let theProblem = document.getElementById("theProb")
    var num1 = Math.floor(Math.random() * 20);
    var num2 = Math.floor(Math.random() * 20);
    var toSwap;
    const operator = Math.random() < 0.5 ? '+' : '-';
    if (operator === "-" && num2 > num1 )
    {
      toSwap = num2;
      num2 = num1;
      num1 = toSwap;
    }
    var x = document.createElement("input")
    x.setAttribute("type","text")
    x.setAttribute("value", "Hello World!");
    problem = `${num1} ${operator} ${num2} `;
    theProblem.innerHTML = `${problem} = `
  }

  function generateProblem2() 
  {
    let theProblem = document.getElementById("theProb")
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var operator = Math.random() < 0.5 ? '*' : '/';
    var x = document.createElement("input")
    x.setAttribute("type","text")
    x.setAttribute("value", "Hello World!");
    problem = `${num1} ${operator} ${num2} `;
    theProblem.innerHTML = `${problem} = `
  }

  function generateProblem3() 
  {
    var operator;
    let randomNum = Math.floor(Math.random() * 4)
    if (randomNum === 0 )
    {
      operator = "+";
    }else if (randomNum === 1 )
    {
      operator = "-";
    }else if (randomNum === 2 )
    {
      operator = "*";
    }else
    {
      operator = "/";
    }
    let theProblem = document.getElementById("theProb")
    var num1 = Math.floor(Math.random() * 20);
    var num2 = Math.floor(Math.random() * 20);
    var toSwap;
    if (operator === "-" && num2 > num1 )
    {
      toSwap = num2;
      num2 = num1;
      num1 = toSwap;
    }
    var x = document.createElement("input")
    x.setAttribute("type","text")
    x.setAttribute("value", "Hello World!");
    problem = `${num1} ${operator} ${num2} `;
    theProblem.innerHTML = `${problem} = `
  }

  var Result;
  function onStart() 
  {
    let onClickSubmit = document.getElementById("theAnswer");
    onClickSubmit.addEventListener("keypress",function(e){
      if (e.key === "Enter")
      {
        e.preventDefault();
        document.getElementById("start-btn").click();
        onClickSubmit.value = " "
      }
    })

    Result = document.getElementById("result")
  }

  // Check the player's answer
  function checkAnswer() 
  {
    let userAnswer = eval(document.getElementById("theAnswer").value);
    let reset = document.getElementById("theAnswer")
    const correctAnswer = eval(problem);
      if (userAnswer === correctAnswer) {
          score++;
          console.log("Correct! Your score is now " + score);
      } else {
        console.log("Incorrect. The correct answer was " + correctAnswer);
      }
      reset.value = " "
      if (score < 5)
      {
        Result.innerHTML = `Level : 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${score} ` ;
        level = 1;
        generateProblem();
      } else if (score > 5 && score<10)
      {
        Result.innerHTML = `Level : 2 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${score} ` ;
        level = 2;
        generateProblem2();
      }else
      {
        Result.innerHTML = `Level : 3 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : ${score} ` ;
        level = 3;
        generateProblem3()
      }
  }


  return (
    <main className={mathCss.main}>
      <h3 className={mathCss.h3}>
        Fill in the blank with correct number or operator
      </h3>
      <h1 className={mathCss.h3} id="result">
      Level : 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Score : 0
      </h1>
      <div className={mathCss.container}>
        <div className={mathCss.container1}>
          <p className={mathCss.p1} id="theProb">
            x ? y = 
          </p>
          <input className={mathCss.inputG} type="text" placeholder="?" id="theAnswer" size="10">
          </input>
        </div>
        <button className={mathCss.startbtn} id="submit-btn" onClick={() => {generateProblem();onStart();}}>
          Start
        </button>
        <button className={mathCss.submitbtn} id="start-btn" onClick={checkAnswer}>
          Submit
        </button>
      </div>
    </main>
  );
}

export default Mathmatics;
