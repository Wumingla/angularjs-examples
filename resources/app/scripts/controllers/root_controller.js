define(['controllers/controllers', 'services/user_service'], function(controllers) {
    controllers.controller('RootController', function($scope, users) {
        $scope.users = users;
    });
});