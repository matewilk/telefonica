export default function ($rootScope, $scope)
{
    $scope.isLoaded = false;
    $scope.started = false;

    $rootScope.$on('$includeContentLoaded', function(event) {
        $scope.isLoaded = true;
    });

    $scope.startAll = function(){
        $scope.started = true;
        $rootScope.$broadcast('startAll');
    }

    $scope.stopAll = function(){
        $scope.started = false;
        $rootScope.$broadcast('stopAll');
    }

    $scope.resetAll = function(){
        $rootScope.$broadcast('resetAll');
    }
}
