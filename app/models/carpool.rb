class Carpool < ActiveRecord::Base
  geocoded_by :origin_address
  geocoded_by :destination_address
  after_validation :geocode, :if=> :address_changed?


  def self.near_origin(search_query)
    near(search_query, 5, 
      order: :distance,
      latitude: :origin_latitude,
      longitude: :origin_longitude
      )
  end

  def self.near_destination(search_query)
    near(search_query, 5, 
      order: :distance, 
      latitude: :destination_latitude, 
      longitude: :destination_longitude
      )
  end

  def self.locations(origin,destination)
    Carpool.near_origin(origin) & Carpool.near_destination(destination)
  end

  # def as_json
  #   super(:except)
  # end
  
end
