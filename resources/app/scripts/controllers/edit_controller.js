define(['controllers/controllers', 'services/user_service'], function(controllers) {
    controllers.controller('EditController', function($scope, $location, user) {
        $scope.user = user;
        $scope.save = function() {
            $scope.user.$save({
                id: $scope.user.id,
                name: $scope.user.name
            }, function(user) {
                $location.path('/' + user.id);
            });
        }
        $scope.remove = function() {
            $scope.user.$remove(function() {
                $location.path('/');
            });
            delete $scope.user
        }
    });
});