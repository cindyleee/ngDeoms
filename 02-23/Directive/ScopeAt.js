/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.controller('MyCtrl',['$scope',function($scope){
    $scope.ctrlFlavor = "RIO";
}]);
myModule.directive('drink',function (){
    return {
        restrict:'AE',
        template:'<a style="color: #ff0000">{{flavor}}</a>',
        scope:{
            flavor:'@'//等同于link
        }
        /*link:function(scope,element,attrs){
            scope.flavor = attrs.flavor;
        }*/
    }
});