define(['services/services'], function(services) {
    services.factory('User', function($resource) {
        return $resource('/users/:id', {id: '@id'});
    });

    services.factory('UsersLoader', function(User, $q) {
        return function() {
            var delay = $q.defer();
            User.query(function(users) {
                delay.resolve(users);
            }, function() {
                delay.reject('Unable to list all users');
            });
            return delay.promise;
        };
    });

    services.factory('UserLoader', function(User, $q, $route) {
        return function() {
            var delay = $q.defer();
            User.get({id: $route.current.params.id}, function(user) {
                delay.resolve(user);
            }, function() {
                delay.reject('Unable to fetch user ' + $route.current.params.id);
            })
            return delay.promise;
        }
    });
});
