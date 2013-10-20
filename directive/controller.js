var appModule = angular.module('app');

appModule.controller('SomeController', function($scope) {
    $scope.message = {text: 'nothing clicked yet'};

    $scope.clickUnfocused = function() {
        $scope.message.text = 'unfocused button clicked';
    };

    $scope.clickFocused = function() {
        $scope.message.text = 'focus button clicked';
    }
})