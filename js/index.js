angular.module('movieApp.indexCtrl',[])
  .controller('indexCtrl',['$scope',function($scope){
    $scope.searchName = "";
   $scope.search = function(){
    window.location.href = '#searh/'+$scope.searchName;
    }
  }])