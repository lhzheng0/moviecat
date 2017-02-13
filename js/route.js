angular.module('movieApp.route',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      //配置路由的条件
      $routeProvider.when('/?', {
        templateUrl: 'tmps/index-tmp.html'
      }).when('/nowplaying/:pageid?', {
        templateUrl: 'tmps/nowplaying-tmp.html',
        controller:'nowplayingCtrl'
      }).when('/later/:pageid?', {
        templateUrl: 'tmps/later-tmp.html',
        controller:'laterCtrl'
      }).when('/top250/:pageid?', {
        templateUrl: 'tmps/top250-tmp.html',
        controller:'top250Ctrl'
      }).when('/details/:id?',{
        templateUrl:'tmps/details-tmp.html',
        controller:'detailsCtrl'
      })
    }]);