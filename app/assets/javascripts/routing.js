(function(){
  angular.module('app')
    .config(config)
    .run(run);
 
  function config($routeProvider, $locationProvider){

    // defining our angular routes
 
    $routeProvider

    .when('/', {
      title: "Carpool Collective",
      templateUrl: "index.html", 
      controller: 'MainController',
      controllerAs: 'main'
    })

    // .when('/signup',{
    //   title: "signup",
    //   templateUrl: "new.html.erb",


    // } )


    .when('/users/new', {
      title: "New User",
      templateUrl: "newUser.html",
      controller: "MainController",
      controllerAs: "main"
    })

    .when('/profile', {
      title: "Profile",
      templateUrl: "showUser.html",
      controller: 'MainController',
      controllerAs: 'main'
    })

    // $routeParams service; /profile/:id

    .when('/carpools/:id/edit', {
      title: "Edit carpool",
      templateUrl: "edit.html",
      controller: 'MainController',
      controllerAs: 'main'
    })

    .when('/carpool', {
      title: "Carpool Details",
      templateUrl: "show.html",
      controller: 'MainController',
      controllerAs: 'main'
    })

    .when('/carpools/new', {
      title: "New",
      templateUrl: "new.html",
      controller: "MainController",
      controllerAs: 'main'
    })

    
    .otherwise({
      redirectTo: '/'
    });

 

  }

  function run($location, $rootScope){
    var changeRoute = function(event, current, previous) {
      return $rootScope.title = current.$$route.title;
    };
    $rootScope.$on('$routeChangeSuccess', changeRoute);
  }

}).call(this);