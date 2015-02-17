class User < ActiveRecord::Base
  has_secure_password

  has_and_belongs_to_many :carpools

  has_one :api_key, dependent: :destroy
  # could be has many- could have multiple api keys, keeping it simple for this app

  before_create :create_api_key

  # attr_accessor :remember_token
  
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

  def self.find_by_access_token(access_token) 
    APIKey.find_by(access_token: access_token).user
  end
    
  private
  def create_api_key
    self.api_key = APIKey.create
  end

  # ensuring validation on user information
  # def User.digest(string)
  #   cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
  #                                                 BCrypt::Engine.cost
  #   BCrypt::Password.create(string, cost: cost)
  # end

  # def User.new_token
  #   SecureRandom.urlsafe_base64
  # end

  def downcase_email
    self.email = email.downcase
  end


end
