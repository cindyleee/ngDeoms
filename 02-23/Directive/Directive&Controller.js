/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('loader',function(){
    return{
        restrict:'AE',
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
                //scope.loadData();
                //scope.$apply("loadData()");
                scope.$apply(attrs.howtoload);//指令复用，调用属性
            });
        }
    }
});
myModule.controller('myCtrl',['$scope',function($scope){
    $scope.loadData = function (){
        console.log("加载数据中....");
    }
}]);
myModule.controller('myCtrl2',['$scope',function($scope){
    $scope.loadData2 = function (){
        console.log("加载数据中加载数据中....");
    }
}]);
