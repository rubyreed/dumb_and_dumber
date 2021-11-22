class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :dish
      t.belongs_to :actor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
