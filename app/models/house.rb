class House < ApplicationRecord
    has_one: hand, as: :player
end
