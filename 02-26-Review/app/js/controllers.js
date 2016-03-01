/**
 * Created by Lixue on 2016/2/27.
 */
var MyModule = angular.module('MyModule',[]);
MyModule.controller('RestaurantCtrl',['$scope',function($scope){
    $scope.directory = [
        {name : 'KFC',cuisine : 'BBQ'},
        {name : 'Starbucks',cuisine : 'Coffee'},
        {name : 'Pizza Hut',cuisine : 'Pizza'}
    ];
    $scope.selectRestaurant = function(row){
        $scope.selectedRow = row;
        console.log(row);
    }
}]);
MyModule.controller('CartCtrl',['$scope',function($scope){
    $scope.bill = {};
    $scope.temp = {num:0};
    $scope.items = [
        {title : 'Apple',quantity : 8,price : 4},
        {title : 'Banana',quantity : 17,price : 6},
        {title : 'Bear',quantity : 5,price : 6}
    ];
    $scope.totalCart = function (){
        var total = 0;
        for(var i = 0,length = $scope.items.length;i<length;i++){
            total += $scope.items[i].quantity * $scope.items[i].price;
        }
        return total+ $scope.temp.num;
    };
    $scope.subtotal = function (){
        return $scope.totalCart() - $scope.bill.discount;
    };
    $scope.calculateDiscount = function(newVal){
        $scope.bill.discount = newVal >= 100?10:0;
    };
    $scope.$watch('$scope.totalCart+ $scope.temp',$scope.calculateDiscount);
}]);
MyModule.factory('BookListService',['$http',function($http){
    var doRequest = function() {
        return $http({
            method: 'GET',
            url: 'data.json'
        });
    };
    return {
        bookList: function() {
            return doRequest();
        }
    };
}]);
MyModule.controller('BookListCtrl',['$scope','BookListService',function($scope,BookListService){
    BookListService.bookList().success(function(data) {
        $scope.bookList = data;
    });
}]);