class CreateHands < ActiveRecord::Migration[6.0]
  def change
    create_table :hands do |t|
      t.integer :total
      t.boolean :busted
      t.boolean :stood
      t.string :player_id
      t.string :player_type
      
      t.timestamps
    end
  end
end
