class Hand < ApplicationRecord
    belongs_to :player, polymorphic: true
    has_many :cards

    #thinking maybe instead of the user model, draw card should go here. Will make this change when necessary.

    def calculateTotal(hand)
        total = 0
        hand.each do |card|
            if card.to_i > 0
                total+= card.to_i
            elsif card.rank = "A" && total <= 10 
                total += 11 
            elsif card.rank = "A" && total > 10
                total += 1
                card.rank = 1
            else
                total += 10
            end
        end
        total
    end

    #in case they have an Ace in their hand valued at 11, and the player busts by drawing a 10, the following swaps it for an ace valued at 1.
    #to do this in a way that doesn't mutate, we'd have to create an array of aces separate from the initial ace, but since a new deck is generated each round this feels unnecessary.
    def swapAceValue(hand)
        #there are waaaaaaaay too many dots for this to be clean, but can refactor later.
        if hand.values.find("A")
            ace = hand.values.find("A")
            ace.value = 1
        end
    end

    def checkIfBust
        #can't remember if this is the right syntax for select. It's crazy how quick one's memory gets fuzzy after switching languages.
        aces = User.hand.values.select do |"A"|
        total = calculateTotal(User.hand)

        if total > 21 &&  aces.count >= 1
            swapAceValue(User.hand)
            total = calculateTotal(User.hand)
            return total
        elsif total > 21 && aces.count = 0
            print "You busted."
            return "You busted."
            #end round based on what this returns, player loses all money they bet.
        end
    end


    def checkIfSplitPossible(hand)
        if hand.length == 2 && hand.value[0] == hand.value[1]
            #split button displays. 
            #If clicked, starts the next method.
        end
    end

    def split(hand)
        #Users ought to have a total of four hands set to optional in the database, as this is the max amount of hands allowed according to most casinos.
        #I'm not sure quite yet how to do this on the backend but have some fuzzy ideas.
        #userHand1 << hand[0]
        # hand.pop(hand[0])
    end


end
