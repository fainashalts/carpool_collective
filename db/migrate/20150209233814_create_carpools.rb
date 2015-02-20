 class CreateCarpools < ActiveRecord::Migration
  def change
    create_table :carpools do |t|
      t.string :name
      t.string :time
      t.string :origin_address
      t.float :origin_latitude
      t.float :origin_longitude
      t.string :destination_address
      t.float :destination_latitude
      t.float :destination_longitude

      t.timestamps null: false
    end
  end
end
