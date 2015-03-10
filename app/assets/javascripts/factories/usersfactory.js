(function(){
  angular
    .module('app')
    .factory('UsersFactory', UsersFactory);

  UsersFactory.$inject = ['Resources', '$http', '$location'];

  function UsersFactory(Resources, $http, $location){
    
    var Users = function(){
      var self= this;

      // use ngResources for Users
      var UserResource = new Resources('users');

      // get all users
      self.users = UserResource.query();

      //create a user object
      self.user = new UserResource();

      self.currentUser = null;

      getCurrentUser();

      
      function getCurrentUser() {
        var token = window.sessionStorage.access_token;
        
        $http({
            method: 'GET',
            url: '/api/profile/',
            params: {access_token: token} 
          })
          .success(function(data, headers, status) {
            console.log(data);
            console.log(token);
            self.currentUser = data;
          });
      }


      // self.currentUser = function(){
      //   $http.get('/api/users/' + user.id, {user: {access_token: window.sessionStorage.access_token}})
      // }




      // self.create = $http.post("/api/users", {name: self.name, email: self.email, password: self.password, password_confirmation: self.password_confirmation})
      //   .success(function(response){
      //     console.log(response);
      //   })
      //   .error(function(response){
      //     console.log(response);
      //   });

      // self.getCurrentUser = function() {
      //   var token = window.sessionStorage.access_token;
        
      //   user = UserResource.get({access_token: token});
        
      //   return user;
      // }


      self.create = function(name, email, origin_address, destination_address, password, password_confirmation) {

        var user = { user: { name: self.name, email: self.email, origin_address: self.origin_address, destination_address: self.destination_address, password: self.password, password_confirmation: self.password_confirmation } };

        console.log("New User " + user);
        UserResource.save(user, function(data, headers, status){
          user.name = '';
          user.email = '';
          user.password = '';
          user.password_confirmation= '';
          $location.path();
          $location.path('/');

        }).$promise.catch(function(response){
          if(response.status !== 201) {
            self.commentError = true; 
            console.log(response);
          }
        });
      };
    }
    return Users;
  }
})();