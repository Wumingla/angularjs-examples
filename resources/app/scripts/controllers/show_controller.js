define(['controllers/controllers', 'services/user_service'], function(controllers) {
    controllers.controller('ShowController', function($scope, user) {
        $scope.user = user;
    });
});