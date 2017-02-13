angular.module('movieApp.nowplayingCtrl',[])
    .controller('nowplayingCtrl',["$scope",'$movieServ',"$routeParams",function($scope,$movieServ,$routeParams){
      $scope.isLoading = false;
      // console.log($routeParams.pageid);
      $routeParams.pageid = $routeParams.pageid || 1;
      //创建电影列表的展示功能
      $scope.movie = {};
      //通过ajax请求data.json文件  获取数据赋值给movie属性
      // $http({
      //   url:'data.json'
      // }).success(function(data){
      //   $scope.movie = data;
      // })

    //调用
    var start = ($routeParams.pageid-1)*5 || 0;
    $movieServ. jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 5,
        start: start
    }, function(data) {
        $scope.isLoading = true;
        $scope.movie = data;

        $scope.prevPage = $routeParams.pageid - 1;
        if($routeParams.pageid <= 1){
          $scope.prevPage = 1;
        }
        $scope.nextPage = ($routeParams.pageid - 0)+1;
        // 总页数
        $scope.pageCount = Math.ceil(data.total / 5);
        if($scope.nextPage == $scope.pageCount){
          $scope.nextPage = $scope.pageCount;
        }
        $scope.total = data.total;
        $scope.pageid = $routeParams.pageid;
        //手动触发脏检查
        $scope.$apply();
    })
    }])