module Api
  class CommentsController < ApplicationController
    respond_to :json
    protect_from_forgery with: :null_session

    before_action :restrict_access

    def index
      carpool = Carpool.find(params[:id])
      comments = carpool.comments
    end

    def show
    end

    def new
      user = User.find_by_access_token(params[:access_token])
      comment = Comment.new
    end

    def create
      user = User.find_by_access_token(params[:access_token])
      # carpool = Carpool.find(params[:id])
      # comment = carpool.comments.create(comment_params)
      comment = Comment.new(comment_params)
      if comment.save
        render json: comment
      end
    end
  
    private
    def comment_params
      params.permit(:username, :carpool_id, :message, :carpool)
    end

    def restrict_access
      api_key = ApiKey.find_by(access_token: params[:access_token])
      render plain: "You aren't authorized, buster!", status: 401 unless 
       api_key 
    end

  end
end