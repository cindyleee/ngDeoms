/**
 * Created by Lixue on 2015/12/25.
 */
function ClockController($scope) {
    /*var updateClock = function() {
        $scope.clock = new Date();
        $timeout(function() {
            updateClock();
        }, 1000);
    };
    updateClock();*/
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function() {
        $scope.clock.now = new Date()
    };

    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
};