class User < ApplicationRecord
    has_many :hands, as: :player
    has_one :bank_account, as: :player
    has_many :cards, through: :hand

    # def drawCard
    #     User.hand.cards.push(Deck.all.sample)
    #     Deck.destroy(Deck.find(User.hand.last))
        # Not sure if this is the right method. If it breaks, could try Deck.all.pop(User.hand.last)

    # end
end
