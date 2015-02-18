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

    // self.currentUser = function (user){
    //   self.user = user;
    //   console.log(user)
    // }


    function login() {
      $http.post("/api/authenticate", {email: self.email, password: self.password})
      .success(function(response){
        console.log(response);
        // console.log(response.data.name)
        setAccessToken(response.access_token);
        self.isAuthenticated = isAuthenticated();
     
        self.email = null;
        self.password = null;
      })
      .error(function(response){
        console.log(response);
        // this is where you would put error handling
      })
    }

    function logout() {
      window.sessionStorage.clear();
      // could also remove a specific item from your Session Storage
      self.isAuthenticated = isAuthenticated();
    }

    function setAccessToken(token){
      window.sessionStorage.setItem("access_token", token);
    } 

    function isAuthenticated(){
      return window.sessionStorage.access_token ? true: false;
    }

  }