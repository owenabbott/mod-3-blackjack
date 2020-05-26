class Deck < ApplicationRecord
    has_many :cards

    def self.generateDeck
        suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]
        for suit in suits
            for rank in ranks
                # Card.create({suit: suit, rank: rank, count: set_value})
            end
        end
    end

end



