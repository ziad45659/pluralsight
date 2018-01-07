/**
 * Created by ziad.nasser on 07/01/2018.
 * default module
 */

angular
  .module('pcJwtApp').config(function ($urlRouterProvider, $stateProvider) {
  // If route is not recognized, go to route
  $urlRouterProvider.otherwise('/');
  // main state
  $stateProvider.state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })
  // registration state
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html'
    });
});
