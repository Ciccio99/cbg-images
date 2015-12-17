'use strict';

angular.module('cbgimages')
	.factory('Photos', ['$resource', function($resource){
		return $resource('app/portfolio/:category.json', {}, {
			query: {method: 'GET', params:{category:'photos'}, isArray:true}
		});
	}]);
