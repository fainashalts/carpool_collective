module API
  class UsersController < ApplicationController
    respond_to :json
    protect_from_forgery with: :null_session
    skip_before_filter :verify_authenticity_token, only: [:new, :create]

  def index
    users = User.all
    respond_with users
  end

  def show
    user = User.find(params[:id])
    # carpools = user.carpools
    respond_with user
  end

  def get_current_user
    user = User.find_by_access_token(params[:access_token])
    render json: user 
  end

  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      respond_with user, location: [:api, user]
      
    else
      respond_with user
      # render json: {message: "there was an error saving your information"}, status: 422
    end
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      head 204
    else
      render json: {message: "error updating!"}
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head 204
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :img, :carpool_ids => [])
  end

  end #end of UsersController class
end #end of api module