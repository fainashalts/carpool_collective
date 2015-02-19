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

      // carpool search function based on origin and destination addresses
      self.results = function(origin_address, destination_address) {
        var carpool= {origin_address: self.origin_address, destination_address: self.destination_address};

        
        CarpoolResource.search(carpool, function(data, headers, status){
          carpool.origin_address= '';
          carpool.destination_address='';
          self.data = data;
          // return data;

        }).$promise.catch(function(response){
          if(response.status !== 201) {
            self.commentError = true;
          }
        });
        console.log(carpool);
      }; 
      //end carpoool search 

      // create a carpool object
      self.carpool = new CarpoolResource();

      // add a user to carpools
      // self.addUser = function(user){
      //   CarpoolResource.add(user, function(data, headers, status){

      //   }).$promise.catch(function(response){
      //     if(response.status !== 201) {
      //       self.commentError = true;
      //       console.log(response);
      //     }
      //   })
      // }
      self.addUser = function(id){
        console.log("function called");
        $http.post("/api/carpools/" + id + "/add", {access_token: window.sessionStorage.access_token})

      };
      // end add a user to carpools

      self.currentCarpool = null;
      // viewCarpool();

      function viewCarpool(id){
        var token = window.sessionStorage.access_token;

        $http({
          method: 'GET',
          url: '/api/carpool/' + id,  
          params: {access_token: token} 
        })
        .success(function(data, headers, status) {
            console.log(data);
            console.log(token);
            self.currentCarpool = data;
        });
      };

      self.create = function(name, origin_address, destination_address) {

  
        var carpool = { name: self.name, origin_address: self.origin_address, destination_address: self.destination_address, time: self.time}

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
      // end create carpool

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
