angular.module('movieApp.nowplayingCtrl',[])
    .controller('nowplayingCtrl',["$scope",'$movieServ',function($scope,$movieServ){
      //创建电影列表的展示功能
      $scope.movie = {};
      //通过ajax请求data.json文件  获取数据赋值给movie属性
      // $http({
      //   url:'data.json'
      // }).success(function(data){
      //   $scope.movie = data;
      // })

    //调用
    $movieServ. jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 10,
        start: 0
    }, function(data) {
        $scope.movie = data;
        //手动触发脏检查
        $scope.$apply();
    })
    }])