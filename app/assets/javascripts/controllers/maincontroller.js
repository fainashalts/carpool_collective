(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['CarpoolsFactory'];

  function MainController(CarpoolsFactory) {
    var self= this;

    // self.id = ipCookie('id');
    self.Carpool = new CarpoolsFactory();
    
  }

})();