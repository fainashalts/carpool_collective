angular
  .module("app")
  .controller("AuthenticationController", AuthenticationController);


  AuthenticationController.$inject = ["$http", "UsersFactory"];

  function AuthenticationController($http, UsersFactory) {
    var self = this;

    self.email;
    self.password;
    self.login = login;
    self.isAuthenticated = isAuthenticated();
    self.logout = logout; 
    self.User = new UsersFactory();


    function login() {
      
      $http.post("/api/authenticate", {email: self.email, password: self.password})
      .success(function(response){
        console.log(response);
        setAccessToken(response.access_token);
        self.isAuthenticated = isAuthenticated();
     
        self.email = null;
        self.password = null;
      })
      .error(function(response){
        console.log(response);
      })
    }

    function logout() {
      window.sessionStorage.clear();
      self.isAuthenticated = isAuthenticated();
    }

    function setAccessToken(token){
      window.sessionStorage.setItem("access_token", token);
    } 

    function isAuthenticated(){
      return window.sessionStorage.access_token ? true: false;
    }

  }