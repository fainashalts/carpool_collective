(function(){
  angular
    .module('app')
    .factory('UsersFactory', UsersFactory);

  UsersFactory.$inject = ['Resources', '$http'];

  function UsersFactory(Resources, $http){
    
    var Users = function(){
      var self= this;

      // use ngResources for Users
      var UserResource = new Resources('users');

      // get all users
      self.users = UserResource.query();

      //create a user object
      self.user = new UserResource();

      

      // self.create = $http.post("/api/users", {name: self.name, email: self.email, password: self.password, password_confirmation: self.password_confirmation})
      //   .success(function(response){
      //     console.log(response);
      //   })
      //   .error(function(response){
      //     console.log(response);
      //   });


      self.create = function(name, email, password, password_confirmation) {

        var user = { user: { name: self.name, email: self.email, password: self.password, password_confirmation: self.password_confirmation } };

        console.log("New User " + user);
        UserResource.save(user, function(data, headers, status){
          user.name = '';
          user.email = '';
          user.password = '';
          user.password_confirmation= '';
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