/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.controller('MyCtrl',['$scope',function($scope){
    $scope.sayHello= function (name) {
        alert("Hello " + name);
    }
}]);
myModule.directive('greeting',function (){
    return {
        restrict:'AE',
        template:'<input type="text" ng-model="userName"><br/><button class="btn btn-primary" ng-click="greet({name:userName})">Greeting</button><br>',
        scope:{
            greet:'&'//等同于link
        }
        /*link:function(scope,element,attrs){
         scope.flavor = attrs.flavor;
         }*/
    }
});