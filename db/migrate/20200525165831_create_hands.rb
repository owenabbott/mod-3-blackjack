class CreateHands < ActiveRecord::Migration[6.0]
  def change
    create_table :hands do |t|
      t.integer :total
      #if card logic exists on the FE, we don't need to have an array of cards, and instead can just update the total pulled from the FE logic.
      #my suspician is that since javascript is lightning fast, this will cut down on load time, if we can cut down on database updates.
      t.boolean :busted
      t.boolean :stood
      t.timestamps
      t.string :player_id
      t.string :player_type
    end
  end
end
