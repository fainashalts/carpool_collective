(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory', 'UsersFactory', 'CommentsFactory', '$http'];

  function MainController(CarpoolsFactory, UsersFactory, CommentsFactory, $http) {
    var self= this;

    self.Carpool = new CarpoolsFactory();
    self.User = new UsersFactory();
    self.Comment = new CommentsFactory();
    

  }

})();