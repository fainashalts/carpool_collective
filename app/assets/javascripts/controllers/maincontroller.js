(function(){
  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['ipCookie'];

  function MainController(ipCookie) {
    var self= this;

    self.id = ipCookie('id');
  }

})();