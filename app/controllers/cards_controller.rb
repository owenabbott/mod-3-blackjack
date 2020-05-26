class CardsController < ApplicationController
end
    #In future builds we'll get rid of @ variables and rig everything to JSON, I'm just making it this way for testing purposes.
def index
    @cards = Card.all 
end

def show
    set_card
    #I don't think we'll need this, but it might be useful for bugfixing if we take the time to set these routes.
end

def new
    @card = Card.new
end

def create 
    @card = Card.create(params.require(:card).permit(:suit, :rank, :count))
    # @card.count = @card.set_value
    @card.save

    # After seeding, calling Card.first.set_value produces an integer correctly, yet it's not saving. 
    # Not sure what's producing this bug, but I'm close to getting it to work.
    
end

def edit 
    set_itinerary
end

def update 
    @card = Card.update(card_params)
    redirect_to @card
end




private

    def set_card
        @card = Card.find(params[:id])
    end

    def card_params
        params.require(:card).permit(:suit, :rank)
    end







# t.string :suit
# t.string :rank
# #realized calling a column 'value' will have repurcussions when working in Ruby, as .value is already a ruby method useful for iterating. 
# #Renaming it to 'count' for now.
# t.integer :count
# t.integer :deck_id