class CreateActors < ActiveRecord::Migration[6.1]
  def change
    create_table :actors do |t|
      t.string :character
      t.string :quote

      t.timestamps
    end
  end
end
