(function(){
  angular
    .module('app')
    .factory('CarpoolsFactory', CarpoolsFactory);

  CarpoolsFactory.$inject = ['Resources', '$http'];
  
  function CarpoolsFactory(Resources, $http){
    
    var Carpools = function(){
      var self= this; 

      // use ngResource for Carpools
      var CarpoolResource = new Resources('carpools');

      // get all carpools
      self.carpools = CarpoolResource.query();

      // create a carpool object
      self.carpool = new CarpoolResource();

      // self.submit = function(){
      //   self.carpool = {name: self.name, origin_address: self.origin_address, destination_address: self.destination_address}
      // }
      self.create = function(name, origin_address, destination_address) {
        var carpool = { name: self.name, origin_address: self.origin_address, destination_address: self.destination_address}
        
        console.log(carpool);
        CarpoolResource.save(carpool, function(data, headers, status) {
          // take carpool from array
          // self.carpools.unshift(data);
          // clear the modal form
          carpool.name = '';
          carpool.origin_address = '';
          carpool.destination_address = '';
          // carpool.time = '';
        }).$promise.catch(function(response){
          // this fires on error
          if(response.status !== 201) {
            self.commentError = true;
          }
        });
      };

      // delete a carpool
      self.destroy = function(carpool, index) {

        var carpoolObj = {id: carpool};
        CarpoolResource.delete(carpoolObj);
        self.carpools.splice(index, 1);
      };
    };
    return Carpools; 
  }
})();
