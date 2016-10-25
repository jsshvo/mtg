/*Client main module*/

'use strict';

angular.module('MTGOpenboard', ['ui.router', 'ui.bootstrap'/*, 'ngResource'*/]);
/*angular.module('MTGOpenboard').constant('appConstants', 
  {
    baseUrl: "http://localhost:4004"
  }
);*/
angular.module('MTGOpenboard').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  //$urlRouterProvider.when('','/').otherwise('/');
  /*$stateProvider.state('index', { url: '', controller: 'MainController', views: { 
    'lobby': { templateUrl: 'templates/lobby.html', controller: 'LobbyController' },
    'deckcreator': { templateUrl: 'templates/deck-creator.html', controller: 'DeckCreatorController' },
    'board': { templateUrl: 'templates/board.html', controller: 'BoardController' }
  }});*/
  //$stateProvider.state('login', { url: '/login', templateUrl: '', controller: 'LoginController' });
  //$stateProvider.state('error', { url: '/error', templateUrl: '', controller: 'ErrorController' });
  //$locationProvider.html5Mode(true);
}]);
angular.module('MTGOpenboard').run(function($rootScope, $state/*, appConstants*/) {
  //$state.go('index');
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log("STATE CHANGED FROM "+fromState+" TO "+toState);
  });
});