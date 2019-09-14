//EventListner for when the window loads
window.addEventListener('load', init);
//Globals


//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}
// to change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
//represents if the game is going (true if going/ false if not)
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
//shows if correct or game over
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'silk',
  'naughty',
  'alcoholic',
  'makeshift',
  'amused',
  'torpid',
  'explode',
  'legal',
  'clean',
  'rest',
  'hysterical',
  'repeat',
  'snatch',
  'whip',
  'thing',
  'groovy',
  'colorful',
  'brave',
  'current',
  'stiff',
  'enchanting',
  'dock',
  'bead',
  'party',
  'discreet',
  'insurance',
  'nervous',
  'territory',
  'fill',
  'muscle'
];

//Initalize game (when it loads)
function init(){
  //shows number of second in UI
  seconds.innerHTML = currentLevel;
  //calls a function to load a word from the array
  showWord(words)
  //when a word is input we run the function startMatch
  wordInput.addEventListener('input', startMatch);
  //call countdown every second === 1000
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50)
}

//startmatch
function startMatch () {
  //function dedicated to matching word & whatever user types
  if (matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  //if score === -1 display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0
  } else {
  scoreDisplay.innerHTML = score;
  }
}

//match the currentWord to wordInput
function matchWords() {
  //gives us what is typed in
    if (wordInput.value === currWord.innerHTML){
      message.innerHTML = 'Correct! :)';
      return true;
    } else {
      message.innerHTML = '';
      return false;
  }
}

//pick & show random word
function showWord(words){
  //generates random array index
  let randIndex = Math.floor(Math.random() * words.length)
  //outputs random word
  currWord.innerHTML = words[randIndex]
}

//countdown timer
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    // time is greater than 0 it hasnt run out
    //decrement
    time--;
  } else if (time === 0) {
    //game is over
    isPlaying = false;
  }
  //show time
  //innerHTML shows it on the page
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus () {
  if (!isPlaying && time === 0){
    message.innerHTML = 'SORRY, Game Over!  :/';
    score = -1;
  }
}
