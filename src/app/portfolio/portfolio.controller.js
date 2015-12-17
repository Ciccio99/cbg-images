'use strict';

angular.module('cbgimages')
	.controller('portfolioCtrl', function ($scope, $stateParams, Photos){
		$scope.title = $stateParams.category;
		$scope.photos = Photos.query({category: $stateParams.category});
	});