/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('hello',function(){
    return{
        restrict:'AEMC',
        //template:'<div>Hi everyone !</div>',
        templateUrl:'hello.html',
        replace:true
    }
});