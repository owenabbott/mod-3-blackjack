# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Deck.destroy_all
Card.destroy_all


# --------------------------
# testing card creation
# --------------------------

def testDeck
    Deck.create({})
end



suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]
for suit in suits
    for rank in ranks
        Card.create({suit: suit, rank: rank, count: 0, deck_id: testDeck.id})
    end
end

#Count isn't working correctly, spent too much time trying to debug. Leaving 0 as a placeholder value and coming back to it after testing different seed data.

# ------------------------
# testing hand creation
# ------------------------


# If I understand polymorphism right, the player_type should automatically correspond with the associated player_id
# This doesn't appear to work. 


def testDealer
    House.create({})
end


def testPlayer 
    User.create({name: "Test Name", bet: 12})
end

testDealer()
testPlayer()

#hand data:
        # t.integer :total
        # #if card logic exists on the FE, we don't need to have an array of cards, and instead can just update the total pulled from the FE logic.
        # #my suspician is that since javascript is lightning fast, this will cut down on load time, if we can cut down on database updates.
        # t.boolean :busted
        # t.boolean :stood
        # t.timestamps
        # t.string :player_id
        # t.string :player_type
# dealerHand = Hand.create({total: 1, busted: false, stood: false, player_id = testDealer.id})

playerHand = Hand.create({total: 2, busted: false, stood: false, player_id: testPlayer.id})
houseHand = Hand.create({total: 2, busted: false, stood: false, player_id: testDealer.id})



