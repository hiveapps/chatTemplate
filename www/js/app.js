var hive = angular.module('hive', ['ui.router', 'hive.controllers', 'hive.services', 'hive.directives', 'firebase', 'hive.variables']);

hive.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state('hive', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            },
        }
    })
    .state("hive.login", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/login.html'
            }
        }
    })
    .state('hive.chat', {
        url: "/chat",
        views: {
            'content@': {
                templateUrl: 'templates/chat.html'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});