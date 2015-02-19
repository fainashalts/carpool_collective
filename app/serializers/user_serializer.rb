class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :carpools

  # has_many :carpools

  def carpools
    object.carpools.order("name")
  end
end
