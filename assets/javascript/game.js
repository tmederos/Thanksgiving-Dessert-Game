$(document).ready(function(){
// Global variables
  var wins = 0;
  var losses = 0;
  var userTotal = 0;
  var randomNumber = setRandomNumber();
  var applePie = 0;
  var pumpkinPie = 0;
  var pecanPie = 0;
  var cake = 0;
  var appleClicks = 0;
  var pumpkinClicks = 0;
  var pecanClicks = 0;
  var cakeClicks = 0;

setDessertValues();
  //
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setRandomNumber(){
  randomNumber = getRandomInt( 19, 120 );
  console.log( "Random - " + randomNumber );
   $("#randomNumber").text( randomNumber );
   return randomNumber;
}
//
function setDessertValues(){
  applePie = getRandomInt( 1, 12 );
  pumpkinPie = getRandomInt( 1, 12 );
  pecanPie = getRandomInt( 1, 12 );
  cake = getRandomInt( 1, 12 );
  //
 var dessertValues = [applePie, pumpkinPie, pecanPie, cake ];
  // Next we create a for loop to create desserts for every numberOption.
  for (var i = 0; i < dessertValues.length; i++) {
    // Each dessert will be given a data attribute called data-value.
    // This data attribute will be set equal to the array value.
    $(".dessert").attr("data-value", dessertValues[i]);
  }
  //
  console.log( "Apple - " + applePie);
  console.log( "Pumpkin - " + pumpkinPie);
  console.log( "Pecan - " + pecanPie);
  console.log( "Cake - " + cake);
}

// Reset Game
function resetGame(){
  setRandomNumber();
  setDessertValues();
  userTotal = 0;
  $('#userTotal').text(userTotal);
  appleClicks = 0;
  pumpkinClicks = 0;
  pecanClicks = 0;
  cakeClicks = 0;
  $("#appleClicks").text( appleClicks );
  $("#pumpkinClicks").text( pumpkinClicks );
  $("#pecanClicks").text(pecanClicks);
  $("#cakeClicks").text( cakeClicks );
}
//
function playGame(){
  if ( userTotal === randomNumber ){
    wins++;
    $('#wins').text(wins);
    $("#game-msg").text("You won!");
    resetGame();
  }
  else if ( userTotal > randomNumber ){
    losses++;
    $('#losses').text(losses);
    $("#game-msg").text("You Lose!");
    resetGame();
  }
};

// On click for each image.
$('#applePie').on('click', function(){
  // userTotal = $("#applePie").text(applePie);
  userTotal += applePie;
  $("#userTotal").text(userTotal);
  appleClicks++;
  $("#appleClicks").text( appleClicks );
  playGame();
});
$('#pumpkinPie').on('click', function(){
  userTotal += pumpkinPie;
  $('#userTotal').text(userTotal);
  pumpkinClicks++;
  $("#pumpkinClicks").text( pumpkinClicks );
  playGame();
});
$('#pecanPie').on('click', function(){
  userTotal += pecanPie;
  $('#userTotal').text(userTotal);
  pecanClicks++;
  $("#pecanClicks").text(pecanClicks);
  playGame();
});

$('#cake').on('click', function(){
  userTotal += cake;
  $('#userTotal').text(userTotal);
  cakeClicks++;
  $("#cakeClicks").text( cakeClicks );
  playGame();
});

});


