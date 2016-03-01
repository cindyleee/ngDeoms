/**
 * Created by Lixue on 2016/2/22.
 */
var myCSSModule = angular.module('myCSSModule',[]);
myCSSModule.controller('CSSCtrl',['$scope',function($scope){
    $scope.color = "red";
    $scope.setGreen = function (){
        $scope.color  = "green";
    }
}]);