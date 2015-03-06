(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory', 'UsersFactory', 'CommentsFactory', '$http'];

  function MainController(CarpoolsFactory, UsersFactory, CommentsFactory, $http) {
    var self= this;
    // self.betterUser = betterUser;

    // self.id = ipCookie('id');
    self.Carpool = new CarpoolsFactory();
    self.User = new UsersFactory();
    self.Comment = new CommentsFactory();
    
    // function betterUser(){
    //   $http.get("/api/users/14")
    //   .success(response){
    //     console.log(response);
    //   }
    // }
  }

})();