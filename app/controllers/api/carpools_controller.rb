module Api
  class CarpoolsController < ApplicationController
    respond_to :json
    protect_from_forgery with: :null_session
    skip_before_filter :verify_authenticity_token, only: [:new, :create]

    def index
      if params[:origin_address]
        carpools= Carpool.locations(params[:origin_address], params[:destination_address])
      else
        carpools = Carpool.all
      end
      respond_with carpools 
    end

    def show
      carpool = Carpool.find(params[:id])
      respond_with carpool
    end

    def new
      carpool = Carpool.new
    end

    def create
      carpool = Carpool.new(carpool_params)
        if carpool.save
          respond_with carpool, location: [:api, carpool]
        else
          respond_with carpool
        end
    end

    def edit
    end

    def update
    end

    def destroy
      carpool = Carpool.find(params[:id])
      carpool.destroy
      head 204
    end

    private

    def carpool_params
      params.require(:carpool).permit(:name, :origin_latitude, :origin_longitude, :origin_address, :destination_latitude, :destination_longitude, :destination_address, :time, :user_id)
    end


  end
end