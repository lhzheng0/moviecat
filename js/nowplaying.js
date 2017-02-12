angular.module('movieApp.nowplayingCtrl',[])
    .controller('nowplayingCtrl',["$scope",'$http',function($scope,$http){
      //创建电影列表的展示功能
      $scope.movie = {};
      //通过ajax请求data.json文件  获取数据赋值给movie属性
      $http({
        url:'data.json'
      }).success(function(data){
        $scope.movie = data;
      })
    }])