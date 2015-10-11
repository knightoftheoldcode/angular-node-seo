(function() {
  "use strict";

  angular.module("angular-seo", ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: true });

    $routeProvider
    .when('/', {
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: 'templates/pages/home/index.html'
    })
    .when('/about', {
      controller: 'StaticPageController',
      controllerAs: 'about',
      templateUrl: 'templates/pages/home/about.html'
    })
    .when('/contact', {
      controller: 'StaticPageController',
      controllerAs: 'contact',
      templateUrl: 'templates/pages/home/contact.html'
    })
    .when('/tomes', {
      controller: 'StaticPageController',
      controllerAs: 'tomes',
      templateUrl: 'templates/pages/home/tomes.html'
    })
    .when('/squire', {
      controller: 'StaticPageController',
      controllerAs: 'squire',
      templateUrl: 'templates/pages/home/squire.html'
    })
    .when('/tournament', {
      controller: 'StaticPageController',
      controllerAs: 'tournament',
      templateUrl: 'templates/pages/home/tournament.html'
    })
    .when('/404', {
      controller: 'StaticPageController',
      controllerAs: 'notFound',
      templateUrl: 'templates/pages/errors/404.html'
    })
    // .when('/login', {
    //   controller: 'LoginController',
    //   templateUrl: 'templates/pages/login/login.html'
    // })
    .otherwise({
      redirectTo: '/404'
    });
  })

  .controller('HomeController', function($scope, $location) {
  })
  .controller('StaticPageController', function($scope, $location) {
  })
  .controller('NotFoundController', function($scope, $location) {
  })
  // .controller('LoginController', function($scope, $location, AuthenticatedUser) {
  //   $scope.login = function() {
  //     console.log('user: ' + AuthenticatedUser.user);
  //
  //     AuthenticatedUser.username = "mediarif";
  //     console.log('user: ' + AuthenticatedUser.user);
  //
  //
  //     $location.path('/#/actnows');
  //   };
  // })
  ;

}());
