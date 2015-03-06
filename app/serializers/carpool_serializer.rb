class CarpoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :origin_address, :destination_address, :users, :num_users, :comments

  has_one :name, root: :name

  has_many :users

  has_many :comments

  def comments
    object.comments
  end

  def users
    object.users.order("name")
  end

  def num_users 
    object.users.count
  end
end
