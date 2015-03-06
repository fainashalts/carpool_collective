class AddCommentToCarpools < ActiveRecord::Migration
  def change
    add_column :carpools, :comment_id, :integer
  end
end
