/**
 * Created by Lixue on 2016/2/22.
 */
var myCSSModule = angular.module('MyCSSModule',[]);
myCSSModule.controller ('HeaderController',['$scope',function($scope){
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function(){
        $scope.messageText = "错误信息";
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function (){
        $scope.messageText = "警告信息";
        $scope.isError = false;
        $scope.isWarning = true;
    }
}]);