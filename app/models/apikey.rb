class APIKey < ActiveRecord::Base
  belongs_to :user

  before_create :generate_access_token
  # every time an api key tries to get created, it will go to that method

  # def as_json(options={})
  #   super(only: :access_token)
  #   # so now when this gets serialized to json the only thing it includes is that access token
  # end

  private

  def generate_access_token
    begin 
      self.access_token = SecureRandom.hex
    end while self.class.exists?(access_token: access_token)
    # self.class equals APIKey
    # we need to generate a totally unique access token; because otherwise we woudl have a problem trying to figure out the user it belongs to; if it does indeed find another api key that has this same access_token it will go ahead and start at the beginning of the loop again; apikey.exists? is similar to other query methods; the only reason it runs again is if there are records that already have this access token
    # just like apikey.where or .find
    # self.class -- an instance of APIKey; could have written APIKey.where(access_token: access_token).exists? 
    # if we had added a validation on here then we wouldn't be able to re-run the loop in this way
    # could also put a uniqueness constraint on db column if you want to
      
    end
  end
