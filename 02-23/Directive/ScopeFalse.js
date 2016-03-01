/**
 * Created by Lixue on 2016/2/24.
 */
angular.module("MyApp", [])
    .controller("MyController", function ($scope) {
        //J1 这里我们在作用域里初始化两个变量
        $scope.name = "Cindy";
        $scope.age = 20;
        //J2 创建一个方法，修改我们创建的对象的年龄
        $scope.changeAge = function () {
            $scope.age = 22;
        }
    })
    //J3 创建我们的指令，指令名字为"myDirective"
    .directive("myDirective", function () {
        var obj = {
            //J4   指令的声明模式为 "AE" 属性和元素
            restrict: "AE",
            //J5   指令继承父作用域的属性和方法
            scope: false,
            replace: false,
            template: "<div class='my-directive'>" +
                "<h3>下面部分是我们创建的指令生成的</h3>" +
                "我的名字是：<span ng-bind='name'></span><br/>" +
                "我的年龄是：<span ng-bind='age'></span>" +
                "<br><input type='text' ng-model='name'><br><input type='number' ng-model='age'>"+
                " </div>"
        };
        return obj;
    });