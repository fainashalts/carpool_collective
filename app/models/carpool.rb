class Carpool < ActiveRecord::Base
  has_and_belongs_to_many :users
  geocoded_by :origin_address, latitude: :origin_latitude, longitude: :origin_longitude
  geocoded_by :destination_address, latitude: :destination_latitude, longitude: :destination_longitude
  after_validation :geocode

  # for geocoder to geocode the origin address as well as the destination address; otherwise it only does the last one on the list
  before_save :geocode_the_origin_address

  def geocode_the_origin_address
    coords = Geocoder.coordinates(self.origin_address)
    self.origin_latitude = coords[0]
    self.origin_longitude = coords[1]
  end

  def self.near_origin(search_query)
    Carpool.near(search_query, 5, 
      # order: :distance,
      latitude: :origin_latitude,
      longitude: :origin_longitude
      )
  end

  def self.near_destination(search_query)
    Carpool.near(search_query, 5, 
      # order: :distance, 
      latitude: :destination_latitude, 
      longitude: :destination_longitude
      )
  end

  def self.locations(origin, destination)
    Carpool.near_origin(origin) & Carpool.near_destination(destination)
    # carpools.each do |c|
    #   if c.users > 4
    #     c.delete
    #   end
    # end
    
    # or make a new array to push into 
  end

  # def as_json
  #   super(:except)
  # end

end
