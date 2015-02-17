module API

  class AuthenticationController < ApplicationController
   protect_from_forgery with: :null_session
   respond_to :json
  
    def sign_in
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password]) #from has secure password, gives us authenticate
        render json: user.api_key
      else
        render json: { message: "email or password incorrect"},
          status: 422
      end
    end  
# define signout to destroy the api_key; destroy action could send a delete request with the logout button on angular side
  end #end class

end #end module