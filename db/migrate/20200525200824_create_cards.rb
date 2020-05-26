class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :suit
      t.string :rank
      t.integer :count
      t.integer :deck_id
      
      t.timestamps
    end
  end
end

      #realized calling a column 'value' will have repurcussions when working in Ruby, as .value is already a ruby method useful for iterating. 
      #Renaming it to 'count' for now.