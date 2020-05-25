"use strict"



// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
// Posting the Total
// Initiating new round
// 
// player total (score, shows whether they're up or down based on the bank account they started with) --- create, edit actions.
// player Bank account --- create, edit
// player name ----create, edit, update, destroy.

// rounds ---- create

// bots ------ bank account? 
// bots ------ total (score, shows whether they're up or down based on the bank account they started with)

// house ------ we could show whether the house won or lost the round.

// after playing around with the FE logic of the game, I'm wondering I actually need a card, deck, or hand model on the backend. 
// The generation of cards and hands can happen on the FE and cards in any given round don't necessarily need to be recorded, only the total matters.
// It'll be more optimized that way as well.



// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// Some of the general blackjack functions help with fetching the total, and will be called during patch requests. 
// I think maybe making all of that into a module once we have it hooked up importing it will make the code cleaner



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// need to have buttons for 'hit-me', 'stand,' 'double down,' etc. These will be click events linked to buttons with specific IDs.
// Hit Me Button: identifier.addEventListener('click', hitMe)
// Etc


//------------------------------------------
// General BlackJack Rules
//------------------------------------------


let houseHand = []
let userHand = []
let userHand2 = []
let userHand3 = []
let userHand4 = []
// have to add a function that calls whenever a user takes an action to see if the length of these hands is > 0, to check if user split or not.
// if length is greater than 0, user gets another turn playing that hand.
// I guess in the backend there could be a true/false bool, saying whether hand has been played on the associated round or not.
// if round.hand.been_played is set to true, it moves on.


class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]



function generateDeck(){
  //add conditional here: If currentDeck.length === 0, generates new deck.
  let deck = []
  for (let suit in suits){
    for (let value in values){
      deck.push(new Card(suits[suit], values[value]))
    }
  }
  return deck
}
//Once we implement everything, we need to call GenerateDeck for every round, to ensure the deck never runs out. 
let deck = generateDeck()

function drawCard(){
  //randomizing the index ensures the deck is always 'shuffled.'
  let cardIndex = Math.floor(Math.random() * deck.length)
  let card = deck[cardIndex]
  deck.splice(cardIndex, 1)
  return card
}

// console.log(drawCard())
// console.log(deck.length)

// (pseudoCode):
// function aces(card){
//   if (card.value === 'A' && hand.total <= 11){
//     card.value = 10
//   } else {
//     card.value = 1
//   }
// }

let testHand = [{suit: "spade", value: 10},{suit: "hearts", value: 10},{suit: "spade", value: "A"}]

function calculateTotal(hand){
  let total = 0
  hand.forEach(card => {
    if (parseInt(card.value) > 0){
      total += parseInt(card.value)
    } else if (card.value === "A" && total <= 10){
      total += 11
    } else if (card.value === "A" && total > 10) {
      total += 1
      card.value = 1
    } else {
      total += 10
    }
  })
  return total
};

console.log(calculateTotal(testHand))


function swapAceValue(){
  if (userHand.find(card => card.value ==="A")){  
  let ace = userHand.find(card => card.value === "A")
  ace.value = 1
  }
}

userHand = [{suite: "Diamond", value: 10}, {suite: "Spades", value: 10},{suite: "Hearts", value: "A"}, {suite: "blah", value: 10}]

function checkIfBust(){
  let aces = []
  aces.push(userHand.find(card => card.value === "A"))

  let total = calculateTotal(userHand)
  console.log(typeof aces[0])
  if (total > 21 && typeof aces[0] != "undefined"){
    swapAceValue(userHand)
    total = calculateTotal(userHand)
    return total
  } else if (total > 21 && typeof aces[0] === "undefined"){
    console.log("You busted.")
    //end round, player loses all money they bet.
  }
}

checkIfBust()

// console.log(calculateTotal(userHand))

//Will be linked to player click event:
function hitMe(){
  userHand.push(drawCard())
  //checkIfBust()
  //add conditional that says if busted()==="You busted." ends the round, player loses bet.
  return userHand
}




//split will activate on a click event.

//The button for split will have it's display set to hidden unless player has two of the same card in his hand.

//I was thinking initially that 'split' would add a new array into UserHand, but this messes up the way calculateTotal works.

//So a better way to do it with the code I've already written is to add arrays.

//Looked up rules on splitting and some casinos only allow one split, most allow three, and a few allow six.

function checkIfSplitPossible(){
  if (userHand.length === 2 && userHand[0].value === userHand[1].value){
    //(split button selector goes here).style.display = 'block'
    //will have to replace userHand with currentHand, once I figure out how to alternate which hand is in play, but this is the gist of it.
  }
}

function split(event){
  userHand1.push(userHand[0])
  userHand.unshift(userHand[0])
}


