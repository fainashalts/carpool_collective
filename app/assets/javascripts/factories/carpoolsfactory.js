(function(){
  angular
    .module('app')
    .factory('CarpoolsFactory', CarpoolsFactory);

  CarpoolsFactory.$inject = ['Resources', '$http', '$routeParams', '$location'];
  
  function CarpoolsFactory(Resources, $http, $routeParams, $location){
    
    var Carpools = function(){
      var self= this; 

      // use ngResource for Carpools
      var CarpoolResource = new Resources('carpools');

      // get all carpools
      self.carpools = CarpoolResource.query();

       // create a carpool object
      self.carpool = new CarpoolResource();

      // carpool search function based on origin and destination addresses
      self.results = function(origin_address, destination_address) {
        var carpool= {origin_address: self.origin_address, destination_address: self.destination_address};

        
        CarpoolResource.search(carpool, function(data, headers, status){
          carpool.origin_address= '';
          carpool.destination_address='';
          self.data = data;
          // return data;
          console.log(data)


        }).$promise.catch(function(response){
          if(response.status !== 201) {
            self.commentError = true;
          }
        });
        console.log(carpool);
      }; 
      //end carpoool search 

      

      // add a user to carpools
      
      self.addUser = function(id){
        console.log("function called");
        $http.post("/api/carpools/" + id + "/add", {access_token: window.sessionStorage.access_token})

      };

      self.removeUser = function(id){
        console.log("removing user");
        $http.post("/api/carpools/" + id + "/delete", {access_token: window.sessionStorage.access_token})
      }
      // end add a user to carpools

      // self.currentCarpool = function(id){
      //   var carpool= {id: self.id};
      //   console.log(carpool);
      //   CarpoolResource.get(carpool, function(data, headers, status){
          
      //     self.data = data;
      //     // return data;

      //   }).$promise.catch(function(response){
      //     if(response.status !== 201) {
      //       self.commentError = true;
      //     }
      //   });
      //   console.log(carpool);
      // }; 
      

      // self.currentCarpool = null;
      // show a specific carpool
      // self.viewCarpool = function(id){
      //   console.log("viewCarpool called");
      //   var token = window.sessionStorage.access_token; 
      //   // self.id = $routeParams.id
      //   $http({
      //     method: 'GET',
      //     url: '/api/view/' + id,
      //     params: {access_token: token}
      //   })
      //   .success(function(data, headers, status){
      //     console.log(data);
      //     self.currentCarpool = data;
      //   });
      // };

         //   $http({
      //     method: 'GET',
      //     url: '/api/view/' + id,
      //     params: {access_token: token}
      //   })
      

      // self.currentCarpool = null;
      // viewCarpool();

      // function viewCarpool(id){
      //   var token = window.sessionStorage.access_token;

      //   $http({
      //     method: 'GET',
      //     url: '/api/view/' + id,  
      //     params: {access_token: token} 
      //   })
      //   .success(function(data, headers, status) {
      //       console.log(data);
      //       console.log(token);
      //       self.currentCarpool = data;
      //   });
      // };

      self.viewCarpool = function(id){
        // var carpool= { id: self.id, name: self.name, origin_address: self.origin_address, destination_address: self.destination_address, time: self.time}
        console.log("hooray!");
        var token = window.sessionStorage.access_token;
        var url = $location.$$absUrl.split('/');
        var carpool_id = url[url.length-1];
        self.currentCarpool = CarpoolResource.get({id: carpool_id});
        // $http({
        //   method: 'GET',
        //   url: '/api/view/' + id,
        //   params: {access_token: token}
        // })
        // .success(function(data, headers, status){
        //   console.log(data);
        //   self.currentCarpool = data;
        // })
        // .$promise.catch(function(response){
        //   // this fires on error
        //   if(response.status !== 201) {
        //     self.commentError = true;
        //   }
        // });
      }

      // self.viewCarpool = function(id){
      //   var carpool = { id: self.id, name: self.name, origin_address: self.origin_address, destination_address: self.destination_address, time: self.time}
      //   console.log(carpool);
      //   CarpoolResource.get(carpool, function(data, headers, status){
      //     self.currentCarpool = data;
      //     console.log(data)
      //   })
      //   .$promise.catch(function(response){
      //     // this fires on error
      //     if(response.status !== 201) {
      //       self.commentError = true;
      //     }
      //   });
      // };

      // window.onload = self.viewCarpool;
      

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
          document.getElementById('saved').innerHTML= 'Your carpool was successfully saved! It can be seen in your profile!'
          self.saved = saved;
          $location.path();
          $location.path('/profile');
          
        }).$promise.catch(function(response){
          // this fires on error
          if(response.status !== 201) {
            self.commentError = true;
            window.alert("There was an error savng your carpool. Please try again")
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
