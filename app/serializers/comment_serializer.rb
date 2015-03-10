class CommentSerializer < ActiveModel::Serializer

attributes :id, :created_at, :carpool_id, :username, :message

# has_one :id, root: :id

# has_one :carpool, root: :carpool

# def carpool
#   object.carpool
# end

end