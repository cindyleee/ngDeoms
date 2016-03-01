/**
 * Created by Lixue on 2016/2/23.
 */
var myReplaceModule = angular.module('myReplaceModule',[]);
myReplaceModule.directive('hello',function(){
    return{
        restrict:'AE',
        template:'<div>hi everyone !</div>',
        replace:false
    }
});