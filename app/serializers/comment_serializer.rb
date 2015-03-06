class CommentSerializer < ActiveModel::Serializer

attributes :id, :carpool_id, :username, :message, :carpool

# has_one :id, root: :id

has_one :carpool

def carpool
  object.carpool
end

end