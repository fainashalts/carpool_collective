require 'rails_helper'

# describe "Carpools API", :type => :request do
#   it "returns a list of carpools" do
#     FactoryGirl.create_list(:carpool, 10)
#     get "/api/carpools"
#     expect(response).to have_http_status 200

#     # carpools = JSON.parse(response.body)
#     # expect(carpools.count).to eq(10)
#   end

#   it "creates a new carpool" do 
#     carpool_attributes = {"carpool"=> FactoryGirl.attributes_for(:carpool)}
#     post "/api/carpools", carpool_attributes
#     # carpool = JSON.parse(response.body)
#     expect(response).to have_http_status 201
#     expect(response.location).to eq("http://www.example.com/api/view/#{carpool['id']}")
#   end
# end 