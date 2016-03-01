/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('hello',function(){
    return{
        restrict:'AE',
        template:'<div>hello everyone !<div ng-transclude></div></div>',
        transclude:'true'
    }
});