module API
  class CarpoolsController < ApplicationController
    respond_to :json
    protect_from_forgery with: :null_session
    # skip_before_filter :verify_authenticity_token, only: [:new, :create]
    before_action :restrict_access

    def index
      user = User.find_by_access_token(params[:access_token])
      if params[:origin_address]
        carpools= Carpool.locations(params[:origin_address], params[:destination_address])
      else
        carpools = Carpool.all
      end
      respond_with carpools 
    end

    def show
      user = User.find_by_access_token(params[:access_token])
      carpool = Carpool.find(params[:id])
      respond_with carpool
    end

    def new
      user = User.find_by_access_token(params[:access_token])
      carpool = Carpool.new
    end

    def create
      user = User.find_by_access_token(params[:access_token])
      carpool = user.carpools.new(carpool_params)
        if carpool.save
          respond_with carpool, location: [:api, carpool]
        else
          render json: {message: "there was an error saving this carpool"}, status: 422
        end
    end

    def edit
      user = User.find_by_access_token(params[:access_token])
    end

    def update
      user = User.find_by_access_token(params[:access_token])
    end

    def destroy
      user = User.find_by_access_token(params[:access_token])
      carpool = Carpool.find(params[:id])
      carpool.destroy
      head 204
    end

    private

    def carpool_params
      params.require(:carpool).permit(:name, :origin_latitude, :origin_longitude, :origin_address, :destination_latitude, :destination_longitude, :destination_address, :time, :user_id, :access_token)
    end

    def restrict_access
      api_key = APIKey.find_by(access_token: params[:access_token])
      render plain: "You aren't authorized, buster!", status: 401 unless 
       api_key 
    end


  end
end