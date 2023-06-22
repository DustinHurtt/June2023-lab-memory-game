class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {
      // ... write your code here
      if (this.cards){
        return this.cards.sort((a,b) => 0.5 - Math.random())
      }
      
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
    // ... write your code here
  }
}




