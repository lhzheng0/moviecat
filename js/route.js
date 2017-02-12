angular.module('movieApp.route',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      //配置路由的条件
      $routeProvider.when('/?', {
        templateUrl: 'tmps/index-tmp.html'
      }).when('/nowplaying', {
        templateUrl: 'tmps/nowplaying-tmp.html',
        controller:'nowplayingCtrl'
      }).when('/later', {
        templateUrl: 'tmps/later-tmp.html',
        controller:'laterCtrl'
      }).when('/top250', {
        templateUrl: 'tmps/top250-tmp.html',
        controller:'top250Ctrl'
      })
    }]);