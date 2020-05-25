class Deck < ApplicationRecord

    def generateDeck()
        suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]
        for suit in suits
            for value in values
                Card.create(suit, value)
            end
        end
        @cards = Card.all
    end


    
end



