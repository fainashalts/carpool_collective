class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :carpools, :num_carpools

  # has_many :carpools

  def carpools
    object.carpools.order("name")
  end

  def num_carpools
    object.carpools.count
  end
end
