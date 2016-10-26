/*Client main module*/

'use strict';

angular.module('MTGOpenboard', ['ui.router', 'ui.bootstrap'/*, 'ngResource'*/]);
/*angular.module('MTGOpenboard').constant('appConstants', 
  {
    baseUrl: "http://localhost:4004"
  }
);*/
angular.module('MTGOpenboard').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.when('','/').otherwise('/');
  $stateProvider.state('index', { url: '/', controller: 'MainController', views: { 
    'lobby': { templateUrl: '/ui/templates/lobby.html', controller: 'LobbyController' },
    'deckcreator': { templateUrl: '/ui/templates/deck-creator.html', controller: 'DeckCreatorController' },
    'board': { templateUrl: '/ui/templates/board.html', controller: 'BoardController' }
  }});
  $stateProvider.state('login', { url: '/login', templateUrl: '', controller: 'LoginController' });
  $stateProvider.state('error', { url: '/error', templateUrl: '', controller: 'ErrorController' });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
angular.module('MTGOpenboard').run(function($rootScope, $state/*, appConstants*/) {
  console.log("changing state to index");
  $state.go('index');
  console.log("done");
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log("STATE CHANGED FROM: ");
      console.dir(fromState);
      console.log(" TO: ");
      console.dir(toState);
  });
});