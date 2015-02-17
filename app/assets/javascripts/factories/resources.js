(function(){
    angular
        .module('app')
        .factory('Resources', Resources);

        Resources.$inject = ["$resource", 'ipCookie'];

    function Resources($resource, ipCookie, type){

        var Resource = function(type){

            var self = this;
            var accessToken = window.sessionStorage.access_token;
            // self.ipCookie = ipCookie('id');             

            self.service = 
                $resource('/api/' + type + '/:id', {
                    id: '@id', access_token: accessToken
                }, {
                  query: {
                    method: 'GET',
                    // isArray: true
                  },
                  get:{
                    method: 'GET',
                    // params:{id: self.ipCookie}
                  },
                  search: {
                    method: 'GET',
                    params:{origin: self.origin_address, destination: self.destination_address}
                  },
                  save: {
                    method: 'POST',
                    // params:{user_id: self.ipCookie}
                  },
                  update: {
                    method: 'PUT',
                    // params:{user_id: self.ipCookie}
                  }

                });



            return self.service;
        };      

        return Resource;

    }


}).call(this);