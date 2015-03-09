class Comment < ActiveRecord::Base
  has_one :carpool, inverse_of: :comments

end

