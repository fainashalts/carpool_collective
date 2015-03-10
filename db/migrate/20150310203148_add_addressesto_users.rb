class AddAddressestoUsers < ActiveRecord::Migration
  def change
    add_column :users, :origin_address, :string
    add_column :users, :origin_latitude, :float
    add_column :users, :origin_longitude, :float

    add_column :users, :destination_address, :string
    add_column :users, :destination_latitude, :float
    add_column :users, :destination_longitude, :float
  end
end
