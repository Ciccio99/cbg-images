'use strict';

angular.module('cbgimages', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'ngResource'])
  .config(function ($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('portfolio', {
        url:'/portfolio/{category}',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'portfolioCtrl'
      })
      .state('bio-contact', {
        url: '/bio-contact',
        templateUrl: 'app/bio-contact/bio.contact.html'
      });
  });
