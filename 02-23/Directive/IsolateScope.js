/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('hello',function (){
    return {
        restrict:'AE',
        scope:{},
        template:'<div><input type="text" ng-model="userName">{{userName}}</div>',
        replace : true
    }
});