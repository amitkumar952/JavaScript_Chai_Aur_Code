# projects related to DOM



# Solution Code

### Project 1
 
```javaScript  complete code 1 in Stackblitz website per color chaenging


const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
});

/******************* 2nd Project **********************/
/********************BMI Calculator *******************/

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height)/1000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
  
  if(bmi < 18.6){
    results.innerHTML = `<span>Under Weight : ${bmi} </span>`;
  }else if(bmi > 18.6 && bmi < 24.9){
  results.innerHTML = `<span>Normal weight : ${bmi} </span>`;
  }else{
    results.innerHTML = `<span>Overweight : ${bmi} </span>`
  }
}

}); 



##Project3
/*************************** Didital Clock *******************/

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')





setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000); //setinterval  kahta hai ki mujhe ek methode de do or bta do ki kis interval ke bad chalna hai  



## project 4
// Guesses the number 
let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guesesSlot = document.querySelector('.guesses');

const remining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGues = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault() //ye data ko kahin or nhi jane deta hai
    const guess = parseInt(userInput.value);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please Enter a Valid Number")
  }else if(guess < 1){
    alert("Please Enter a Valid Number Greater than 1")
  }else if(guess > 100){
    alert("Please Enter a Valid Number Less than 100")
  }else{
    prevGues.push(guess);
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over Random number was ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage("You guessed it right")
      endGame()

    }else if(guess < randomNumber){
      displayMessage("Number is Too low")
    }else if(guess > randomNumber){
      displayMessage("Number is Too High")
    }
}

function displayGuess(guess){
    userInput.value = ' '
    guesesSlot.innerHTML += `${guess} `
    numGuess++;
    remining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
  userInput.value = ' '
  userInput.setAttribute('disabled', ' ')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = (parseInt(Math.random() * 100 + 1));
    prevGues = []
    numGuess = 1 
    guesesSlot.innerHTML = ' '
    remining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;

  playGame = true;
  })


}


###Project 6 ColorChanging



//generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
if(!intervalId){
  intervalId = setInterval(changeBgColor, 1000);
}
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  //intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);



### Project 7 

```javaScript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>
  `;
});
```

 
