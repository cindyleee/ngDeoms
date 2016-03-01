/**
 * Created by Lixue on 2016/2/22.
 */
var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.userInfo = {
        email:"304729025@qq.com",
        password:"111111",
        autoLogin:true
    };
    $scope.getFormData = function(){
        console.log($scope.userInfo);
    };
    $scope.setFormData = function (){
        $scope.userInfo = {
            email:"lixue@gisuni.com",
            password:"111111",
            autoLogin:false
        }
    };
    $scope.resetFormData = function (){
        $scope.userInfo = {
            email:"304729025@qq.com",
            password:"111111",
            autoLogin:true
        }
    };
}]);