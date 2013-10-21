define(['controllers/controllers', 'services/user_service'], function(controllers) {
    controllers.controller('NewController', function($scope, $location, User) {
        $scope.user = new User();
        $scope.save = function() {
            $scope.user.$save({
                name: $scope.user.name
            }, function(user) {
                $location.path('/' + user.id);
            });
        };
    });
});