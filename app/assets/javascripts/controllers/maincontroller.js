(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory','ipCookie'];

  function MainController(CarpoolsFactory, ipCookie) {
    var self= this;

    self.id = ipCookie('id');
    self.Carpool = new CarpoolsFactory();
    
  }

})();