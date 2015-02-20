class ChangeCarpoolDataTypeToString < ActiveRecord::Migration
  def change
    change_column :carpools, :time, :string
  end
end
