class User < ActiveRecord::Base
  has_many :carpools
  has_secure_password

  attr_accessor :remember_token
  
  # to use this, need to add a remember_digest to user schema
  # attr_accessor :remember_token

  # email will not be case-sensitive
  before_save :downcase_email

  # checks to make sure name exists and is shorter than 50 characters
  validates :name, presence: true, length: {maximum: 50}

  # checks to make sure email exists, is unique, and under 255 characters
  validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, uniqueness: {case_sensitive: false}, length: {maximum: 255}

  # password validation
  validates :password, length: {minimum: 6}

  # ensuring validation on user information
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def User.new_token
    SecureRandom.urlsafe_base64
  end

  private 

    def downcase_email
      self.email = email.downcase
    end


end
