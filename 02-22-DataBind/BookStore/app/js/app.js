//启动点模块；依赖多个模块
var bookStoreApp = angular.module('bookStoreApp',[
    'ngRoute','ngAnimate','bookStoreCtrls','bookStoreFilters',
    'bookStoreServices','bookStoreDirectives'
    ]);
//$routeProvider进行路由配置
bookStoreApp.config(function ($routeProvider) {
    $routeProvider.when('/hello',{
        templateUrl:'template/hello.html',
        controller:'HelloCtrl'
    }).when('/list',{
        templateUrl:'template/bookList.html',
        controller:'BookListCtrl'
    }).when('/end',{
        templateUrl:'template/end.html',
        controller:'EndCtrl'
    }).otherwise(
        {
            redirectTo:'/hello'
        }
    )
});