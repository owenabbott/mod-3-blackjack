class User < ApplicationRecord
    has_many :hands, as: :player
    has_one :bank_account, as: :player

    def drawCard
        User.hand.push(Deck.all.sample)
        Deck.destroy(Deck.find(User.hand.last))
        #not sure if this is the right method. If it breaks, could try Deck.all.pop(User.hand.last)
    end
end
