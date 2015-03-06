(function(){
  angular
    .module('app')
    .factory('CommentsFactory', CommentsFactory);

  CommentsFactory.$inject = ['Resources', '$http', '$routeParams', '$location'];

  function CommentsFactory(Resources, $http, $routeParams, $location) {

    var Comments = function(){
      var self= this;

      var CommentResource = new Resources('comments');

      self.comment = new CommentResource();

      // self.comments = CommentResource.query();

      // getComments();

      // function getComments(){
      //   var token = window.sessionStorage.access_token;
      //   var url = $location.$$absUrl.split('/');
      //   self.carpool_id = url[url.length-1];

      //   $http({
      //     method: 'GET'
      //     url:'/api/view/'+ self.carpool_id + '/comments'
      //   })
      // }
      self.create = function(carpool_id, username, message) {
        
        var url = $location.$$absUrl.split('/');
        self.carpool_id = url[url.length-1];

        var message = {carpool_id: self.carpool_id, username: self.username, message: self.message};

        
        $http.post("/api/carpools/" + self.carpool_id + '/comments', {username: self.username, message: self.message})

        console.log("new comment" + message.username + " " + message.message);

        self.username = "";
        self.message = "";


        // CommentResource.save(comment, function(data, headers, status){
        //   comment.carpool_id = '';
        //   comment.username = '';
        //   comment.message = '';
        // }).$promise.catch(function(response){
        //   if(response.status !== 201) {
        //     self.commentError = true;
        //     console.log(response);
        //   }
        // });
    };  
  };
  return Comments;
}

})();