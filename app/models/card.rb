class Card < ApplicationRecord
    belongs_to :deck
    belongs_to :hand

    def initialize(suit, rank)
        self.suit = suit
        self.rank = rank
        self.value = self.set_value
        self.image_code = self.set_image_code
    end

    def set_value
        if ['10', 'J', 'Q', 'K'].include?(self.rank))
            10
        elsif card.rank === 'A'
            11
        else
            self.rank.to_i
        end
    end

    def set_image_code
        `#{self.rank}#{self.suit[0]}`
    end

end