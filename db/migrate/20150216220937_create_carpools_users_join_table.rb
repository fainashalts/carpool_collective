class CreateCarpoolsUsersJoinTable < ActiveRecord::Migration
  def change
    create_join_table :users, :carpools
  end
end
