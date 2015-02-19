(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory', 'UsersFactory', '$http'];

  function MainController(CarpoolsFactory, UsersFactory, $http) {
    var self= this;
    // self.betterUser = betterUser;

    // self.id = ipCookie('id');
    self.Carpool = new CarpoolsFactory();
    self.User = new UsersFactory();
    
    // function betterUser(){
    //   $http.get("/api/users/14")
    //   .success(response){
    //     console.log(response);
    //   }
    // }
  }

})();