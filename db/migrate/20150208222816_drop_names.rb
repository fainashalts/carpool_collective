class DropNames < ActiveRecord::Migration
  def change
    drop_table :names
  end
end
