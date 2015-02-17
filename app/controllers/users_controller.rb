class UsersController < ApplicationController

  def index
    @users = User.all 
  end

  def new
    @user = User.new
    if logged_in?
      redirect_to home_path
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      redirect_to home_path
    else
      flash[:danger] = "Failed to sign up!"
      redirect_to root_path
    end
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :img, :password, :password_confirmation, :carpool_id)
    end
end