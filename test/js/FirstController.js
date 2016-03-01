/**
 * Created by Lixue on 2016/1/29.
 */
function FirstController($scope) {
    $scope.counter = 0;
    $scope.add = function (amount){
        $scope.counter += amount;
    }
    $scope.subtract = function (amount){
        $scope.counter -= amount;
    }

}
