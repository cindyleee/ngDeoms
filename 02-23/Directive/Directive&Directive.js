/**
 * Created by Lixue on 2016/2/23.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('superman',function(){
    return{
        scope:{},//独立作用域
        restrict:"AE",
        //区别于控制器，作用是给我们的指令暴露出一组public的方法供外部去调用的
        controller:function($scope){
            $scope.attributes = [];
            this.addStrength = function (){
                $scope.attributes.push("strength");
            };
            this.addSpeed = function (){
                $scope.attributes.push("speed");
            };
            this.addLight = function (){
                $scope.attributes.push("light");
            };
        },
        //处理指令内部
        link:function(scope,element,attrs){
            element.addClass("btn btn-primary");
            element.bind('mouseenter',function(){
                console.log(scope.attributes);
            });
        }
    }
});
myModule.directive('strength',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive('speed',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive('light',function(){
    return {
        require:'^superman',
        link:function(scope,element,attrs,supermanCtrl){
            supermanCtrl.addLight();
        }
    }
});