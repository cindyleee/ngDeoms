/**
 * Created by Lixue on 2016/2/24.
 */
var TestFormModule = angular.module('TestFormModule',[]);
TestFormModule.controller('FormCtrl',['$scope',function($scope){
    $scope.userName = "";
    $scope.password = "";
    $scope.save = function (){
        alert("保存数据");
    }
}]);
TestFormModule.directive('FormDirective',function(){
    return{
        restrict : 'AE',
        template : '',
        replace : true
    }
});