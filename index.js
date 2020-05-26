class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]

function generateDeck(){
  let deck = []
  for (let suit of suits){
    for (let value of values){
      deck.push(new Card(suit, value))
    }
  }
  return deck
}

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

function swapAceValue(hand){
  if (hand.find(card => card.value ==="A")){  
  let ace = hand.find(card => card.value === "A")
  ace.value = 1
  }
}

function renderCard(card = null) {
  return `<img src='./lib/assets/images/${card ? `${card.value}${card.suit[0]}.png` : 'Back.jpg'}'>`
}

function playGame() {
  const houseHand = [];
  const userHand = [];
  const deck = generateDeck();
  const dialog = document.getElementById('dialog')

  function drawCard(isUser = true) {
    const player = document.querySelector(`div[name='${isUser ? 'user' : 'house'}']`)
    const cardContainer = player.querySelector(".card-container")
    const scoreDisplay = player.querySelector("h2")

    const cardIndex = Math.floor(Math.random() * deck.length)
    const card = deck[cardIndex]
    const hand = isUser ? userHand : houseHand
    deck.splice(cardIndex, 1)
    hand.push(card)
  
    if (!isUser) {
      if (hand.length === 1) {
        cardContainer.innerHTML += renderCard()
      }
      else {
        cardContainer.innerHTML += renderCard(card)
        scoreDisplay.innerHTML = `Dealer Score: ${hand.length === 2 ? calculateTotal([card]) : calculateTotal(hand)}`;
      }
    }
    else {
      cardContainer.innerHTML += renderCard(card)
      scoreDisplay.innerHTML = `Your Score: ${calculateTotal(hand)}`;
    }

    return card
  }

  function checkIfBust(hand) {
    const aces = []
    aces.push(hand.find(card => card.value === "A"))
  
    let total = calculateTotal(hand)
    if (total > 21 && typeof aces[0] != "undefined") {
      swapAceValue(hand)
      total = calculateTotal(hand)
      return total
    }
    else if (total > 21 && typeof aces[0] === "undefined") {
      dialog.innerHTML += "You busted. "
      dealerPlay()
    }
  }

  function dealerPlay() {
    const player = document.querySelector("div[name='house']")
    const cardContainer = player.querySelector(".card-container")
    const scoreDisplay = player.querySelector("h2")

    cardContainer.innerHTML = houseHand.map(card => renderCard(card))
    scoreDisplay.innerHTML = `Dealer Score: ${calculateTotal(houseHand)}`
    while (calculateTotal(houseHand) < 17) {
      drawCard(false)
    }
    if (calculateTotal(houseHand) > 21) {
      dialog.innerHTML += "The dealer busted. "
    }
    displayWinner()
  }

  function displayWinner() {
    const userScore = calculateTotal(userHand)
    const dealerScore = calculateTotal(houseHand)
    dialog.innerHTML += `Final scores... Dealer: ${dealerScore}, You: ${userScore}. `
    if (userScore <= 21 && (dealerScore > 21 || userScore > dealerScore)) {
      dialog.innerHTML += "You won!"
    }
    else if (userScore <= 21 && userScore === dealerScore) {
      dialog.innerHTML += "'Twas a push!"
    }
    else {
      dialog.innerHTML += "You lost!"
    }
  }


  [0, 1].forEach(card => drawCard(false));
  [0, 1].forEach(card => drawCard(true));

  document.addEventListener("click", e => {
    if (e.target.id === 'hit-btn') {
      drawCard(userHand, true)
      checkIfBust(userHand)
    }
    else if (e.target.id === 'stay-btn') {
      dealerPlay()
    }
  })

}

document.addEventListener("DOMContentLoaded", () => {
  playGame()
})

// //The button for split will have it's display set to hidden unless player has two of the same card in his hand.
// //I was thinking initially that 'split' would add a new array into UserHand, but this messes up the way calculateTotal works.
// //So a better way to do it with the code I've already written is to add arrays.
// //Looked up rules on splitting and some casinos only allow one split, most allow three, and a few allow six.

// function checkIfSplitPossible(){
//   if (userHand.length === 2 && userHand[0].value === userHand[1].value){
//     //(split button selector goes here).style.display = 'block'
//     //will have to replace userHand with currentHand, once I figure out how to alternate which hand is in play, but this is the gist of it.
//   }
// }

// function split(event){
//   userHand1.push(userHand[0])
//   userHand.unshift(userHand[0])
// }
