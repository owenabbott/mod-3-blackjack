class CreateOpponents < ActiveRecord::Migration[6.0]
  def change
    create_table :opponents do |t|
      t.integer :money
      t.string :name
      
      t.timestamps
    end
  end
end
