(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory', 'UsersFactory'];

  function MainController(CarpoolsFactory, UsersFactory) {
    var self= this;

    // self.id = ipCookie('id');
    self.Carpool = new CarpoolsFactory();
    self.User = new UsersFactory();
  }

})();