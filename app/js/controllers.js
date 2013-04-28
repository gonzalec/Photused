'use strict';

/* Controllers */

photusedApp.controller('PhotoListCtrl', 
  function ($scope, FlickrServices) {

    $scope.photos = FlickrServices.get();

    console.log($scope.photos);

});

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);