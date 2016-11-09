(function() {
'use strict';

angular.module('tbDevPortfolio')
  .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/waitr');

    $stateProvider
      .state('waitr', {
        url: '/waitr',
        views: {
          'portfolio': {
            templateUrl: './portfolio/waitr.template.html',
            controller: 'PortfolioCtrl',
            controllerAs: 'portfolioCtrl'
          }
        }
      })
      .state('wasatch-sports', {
        url: '/wasatch-sports',
        views: {
          'portfolio': {
            templateUrl: './portfolio/wasatch-sports.template.html',
            controller: 'PortfolioCtrl',
            controllerAs: 'portfolioCtrl'
          }
        }
      })
      .state('canyon-sports', {
        url: '/canyon-sports',
        views: {
          'portfolio': {
            templateUrl: './portfolio/canyon-sports.template.html',
            controller: 'PortfolioCtrl',
            controllerAs: 'portfolioCtrl'
          }
        }
      })
      .state('weather-app', {
        url: '/weather-app',
        views: {
          'portfolio': {
            templateUrl: './portfolio/weather-app.template.html',
            controller: 'PortfolioCtrl',
            controllerAs: 'portfolioCtrl'
          }
        }
      });
  }

})();
