/**
 * Created by Lixue on 2016/2/24.
 */
var FormApp = angular.module('FormApp',[]);
FormApp.controller('FormCtrl',['$scope',function($scope){
    var vm = $scope.vm = {
        show_error :false,
        show_type :1,
        user : {}
    }
    vm.submit = function (basic_form){
        vm.show_error = true;
        basic_form.$setDirty();
        if(basic_form.$valid){
            alert("提交成功！");
        }
    }
    vm.change_show_type = function (form) {
        vm.show_error = vm.show_type == 2;
        // 重置表单
        vm.user = {};
        form.$setPristine();

    }
}]);
