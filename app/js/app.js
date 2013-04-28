'use strict';

var photusedApp = angular.module('photusedApp', [ 'ngResource', 'flickrServices' ])
  .config(function($routeProvider, $httpProvider) {

    $routeProvider
      .when('/photo', {
        templateUrl: 'partials/photo-list.html', 
        controller: 'PhotoListCtrl'
    })
      .otherwise({
      redirectTo: '/photo'
    });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];


});

// // Declare app level module which depends on filters, and services
// angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
//   config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//     $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//     $routeProvider.otherwise({redirectTo: '/view1'});
//   }]);
