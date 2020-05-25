class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      #The house has infinite money, so I don't think we need a money column for them.
      t.timestamps
    end
  end
end
