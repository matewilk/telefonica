export default function ($rootScope, $scope)
{
    $scope.isLoaded = false;
    $rootScope.$on('$includeContentLoaded', function(event) {
        $scope.isLoaded = true;
    });

    $scope.startAll = function(){
        $rootScope.$broadcast('startAll');
    }

    $scope.stopAll = function(){
        $rootScope.$broadcast('stopAll');
    }

    $scope.resetAll = function(){
        $rootScope.$broadcast('resetAll');
    }
}
