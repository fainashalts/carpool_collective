class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :img, :carpools, :num_carpools, :origin_address, :destination_address

  # has_many :carpools

  def carpools
    object.carpools.order("name")
  end

  def num_carpools
    object.carpools.count
  end
end
