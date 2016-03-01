/**
 * Created by Lixue on 2016/2/22.
 */
var bookStoreCtrls = angular.module('bookStoreCtrls',[]);
bookStoreCtrls.controller('HelloCtrl',['$scope',
    function($scope){
        $scope.greeting = {
            text:"Hello"
        };
        $scope.pageClass = "hello";
}]);
bookStoreCtrls.controller('BookListCtrl',['$scope',
    function($scope){
        $scope.books = [
            {
                title:"《巴黎圣母院》",
                author:"雨果"
            },
            {
                title:"《悲惨世界》",
                author:"雨果"
            },
            {
                title:"《安娜·卡列尼娜》",
                author:"列夫·托尔斯泰"
            },
        ];
        $scope.pageClass = "list";
}]);
bookStoreCtrls.controller('EndCtrl',['$scope',function($scope){
    $scope.ending = {
        text:"Thank You ！"
    }
    $scope.pageClass = "end";
}])