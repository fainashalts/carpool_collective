(function(){
  angular.module('app')
    .config(config)
    .run(run);
 
  function config($routeProvider, $locationProvider){

    // defining our angular routes
    $routeProvider

    .when('/home', {
      title: "Carpool Collective",
      templateUrl: "index.html", 
      controller: 'MainController',
      controllerAs: 'main'
    })

    .when('carpools/:id/edit', {
      title: "Edit carpool",
      templateUrl: "edit.html",
      controller: 'MainController',
      controllerAs: 'main'
    })

    .when('carpools/:id/show', {
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

    // to get rid of hash in url
    $locationProvider.html5Mode({
      enabled:true, 
      requireBase: true
    });

  }

  function run($location, $rootScope){
    var changeRoute = function(event, current, previous) {
      return $rootScope.title = current.$$route.title;
    };
    $rootScope.$on('$routeChangeSuccess', changeRoute);
  }

}).call(this);