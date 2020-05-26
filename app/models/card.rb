class Card < ApplicationRecord
    #important: in the final version, deck cannot be optional, and hand must be optional. When finished bugfixing it's important to modify this accordingly.
    belongs_to :deck, optional: true
    belongs_to :hand, optional: true

    # def initialize(suit, rank)
    #     self.suit = suit
    #     self.rank = rank
    #     self.value = self.set_value
    #     self.image_code = self.set_image_code
    # end

    # Monkeypatching activerecord's 'initialize' method breaks the code. 
    # We should have image_code in the migration file. All of these things should be called in the create action in the controller.
    # These methods can be called in the controller for creation.


    def set_value
        if ['10', 'J', 'Q', 'K'].include?(self.rank)
            10
        elsif self.rank == 'A'
            11
        else
            self.rank.to_i
        end
    end


    def set_image_code
        `#{self.rank}#{self.suit[0]}`
    end


end