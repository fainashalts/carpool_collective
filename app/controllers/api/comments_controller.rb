module Api
  class CommentsController < ApplicationController
    respond_to :json
    protect_from_forgery with: :null_session

    # before_action :restrict_access
    skip_before_filter :verify_authenticity_token

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
      # user = User.find_by_access_token(params[:access_token])
      carpool = Carpool.find(params[:id])
      # comment = carpool.comments.create(comment_params)
      comment = carpool.comments.new(comment_params)
      if comment.save
        render json: comment
      end
    end
  
    private
    def comment_params
      params.permit(:comment, :username, :message, :carpool_id, carpools: :id)
    end

    # def restrict_access
    #   api_key = ApiKey.find_by(access_token: params[:access_token])
    #   render plain: "You aren't authorized, buster!", status: 401 unless 
    #    api_key 
    # end

  end
end