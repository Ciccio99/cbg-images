'use strict';

angular.module('cbgimages')
  .controller('NavbarCtrl', function ($scope, $mdSidenav) {

  	$scope.openLeft = function() {
    	$mdSidenav('left').open();
  	};

    $scope.closeLeft = function() {
        $mdSidenav('left').close();
    };
  });
