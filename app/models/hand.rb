class Hand < ApplicationRecord
    belongs_to :player, polymorphic: true
end
