/**
 * Created by Lixue on 2016/2/25.
 */
var MyModule = angular.module('MyModule',[]);
MyModule.controller('LoadDataCtrl',['$scope','$http',function($scope,$http){
    $http({
        method:'GET',
        url : 'data.json'
    }).success(function(data){
        console.log("success...");
        console.log(data);
        $scope.users=data;
    }).error(function(){
        console.log("error");
    })
}]);