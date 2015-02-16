class Carpool < ActiveRecord::Base
  has_many :users
  geocoded_by :origin_address, latitude: :origin_latitude, longitude: :origin_longitude
  geocoded_by :destination_address, latitude: :destination_latitude, longitude: :destination_longitude
  after_validation :geocode


  def self.near_origin(search_query)
    near(search_query, 5, 
      order: :distance,
      latitude: :origin_latitude,
      longitude: :origin_longitude
      )
  end

  def self.near_destination(search_query)
    Carpool.near(search_query, 5, 
      order: :distance, 
      latitude: :destination_latitude, 
      longitude: :destination_longitude
      )
  end

  def self.locations(origin, destination)
    Carpool.near_origin(origin) & Carpool.near_destination(destination)
  end

  # def as_json
  #   super(:except)
  # end

end
