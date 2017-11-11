// Random number generator.
Math.random().toString().slice(2,11);


// The Object for the user's input.
  var user = {
    wins: 0,
    losses: 0,
    guesses: 10,
    currentLetter: "",
    theWord: "",
    answerArray: [],
    // Array of Wrong Guesses
  }
  //
  function pickTheWord(){
    var word = user.wordList[Math.floor(Math.random()*user.wordList.length)];
    user.lettersLeft = word.length;
    return word;
  };
  //
  // Make sure the user enters an alphabet character.
  var isAlphabetCharacter = function(letter) {
    return letter.length === 1 && /[a-z]/i.test(letter);
  };

  // Put the word into an array of letters.
  function splitTheWordIntoLetters() {
    user.theWordLetters = user.theWord.toUpperCase().split('');
  };
  // Display the stats on the page
  function renderPage(){
    document.getElementById("guesses-wrong").innerHTML = user.wrongGuesses;
    document.getElementById("guesses-left").innerHTML = user.guesses;
    document.getElementById("wins").innerHTML = user.wins;
    document.getElementById("losses").innerHTML = user.losses;
  };
  // Determines if the user has guesses all of the letters by
  // counting _'s remaining in solution array
  var guessedAllLetters = function(guessesArr) {
  // takes an array of letters and underscore as an argument
    return guessesArr.indexOf("_") === -1;
  };
  //
  var startNewWord = function() {
    console.log("Secret word - " + user.theWord );
    splitTheWordIntoLetters();
    // Put _ in the letter places for display --- Maybe or do this on initialization
    for (var j = 0; j < user.theWord.length; j++) {
      user.answerArray[j] = "_";
    }
    document.getElementById("answerArray").innerHTML = user.answerArray.join(" ");
  }
  //
  startNewWord();
  //
  // The Game starts whenever the user presses a key.
  document.onkeyup = function(event) {
  // Determines which key was pressed.
  user.currentLetter = event.key.toUpperCase();
  //
  if(!isAlphabetCharacter(user.currentLetter)) {
    return;
  }
  // Check for repeats
  if(!repeatGuess(user.currentLetter)) {
    alert("You already guessed that letter!");
    return;
  }
  user.allGuesses.push( user.currentLetter );
  //
  if ( user.theWordLetters.indexOf( user.currentLetter ) != -1 ) {
    for ( var x = 0; x < user.lettersLeft; x++ ){
      if ( user.theWordLetters[x] == user.currentLetter ){
        user.answerArray[x] = user.currentLetter;
        user.correctGuesses++;
        document.getElementById("answerArray").innerHTML = user.answerArray.join(" ");
      }
    }
  }
  else {
    user.guesses--;
    user.wrongGuesses.push( user.currentLetter );
    renderPage();
  }

  };
