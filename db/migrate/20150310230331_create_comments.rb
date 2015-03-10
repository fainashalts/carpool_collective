class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :carpool_id
      t.string :username
      t.string :message
      t.datetime "created_at",            null: false
      t.datetime "updated_at",            null: false
    end
  end
end
