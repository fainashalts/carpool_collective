class RemoveCommentFromCarpools < ActiveRecord::Migration
  def change
    remove_column :carpools, :comment_id
  end
end
