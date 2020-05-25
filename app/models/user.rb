class User < ApplicationRecord
    has_many :hands, as: :player
    has_one :bank_account, as: :player
end
