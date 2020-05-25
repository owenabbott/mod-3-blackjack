class CreateBankAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :bank_accounts do |t|
      t.integer :balance
      t.string :player_id
      t.string :player_type
      t.timestamps
    end
  end
end
