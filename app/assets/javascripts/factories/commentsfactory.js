(function(){
  angular
    .module('app')
    .factory('CommentsFactory', CommentsFactory);

  CommentsFactory.$inject = ['Resources', '$http', '$routeParams', '$location'];

  function CommentsFactory(Resources, $http, $routeParams, $location) {

    var Comments = function(){
      var self= this;

      var CommentResource = new Resources('comments');

      self.comments = CommentResource.query();

      self.comment = new CommentResource();

      self.create = function(id, username, message) {
        
        var url = $location.$$absUrl.split('/');
        self.carpool_id = url[url.length-1];

        var comment = { id: self.carpool_id, username: self.username, message: self.message };

        console.log("new comment" + comment);
        $http.post("/api/carpools/" + id + "/comments", {access_token: window.sessionStorage.access_token})

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