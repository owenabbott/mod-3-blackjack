class BankAccount < ApplicationRecord
    belongs_to :player, polymorphic: true
end
