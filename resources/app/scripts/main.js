require.config({
    paths: {
        angular: 'vender/angular',
        angular_resource: 'vender/angular-resource',
        jquery: 'vender/jquery',
        domReady: 'vender/domReady'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angular_resource: ['angular']
    }
});

require(['angular', 'app', 'domReady',
    'services/user_service',
    'controllers/root_controller', 'controllers/show_controller', 'controllers/new_controller', 'controllers/edit_controller'],
    function(angular, app, domReady) {
    'use strict';
    app.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/root.html',
            controller: 'RootController',
            resolve: {
                users: function(UsersLoader) {
                    return UsersLoader();
                }
            }
        }).when('/new', {
            templateUrl: 'views/new.html',
            controller: 'NewController'
        }).when('/edit/:id', {
            templateUrl: 'views/edit.html',
            controller: 'EditController',
            resolve: {
                user: function(UserLoader) {
                    return UserLoader();
                }
            }
        }).when('/:id', {
            templateUrl: 'views/show.html',
            controller: 'ShowController',
            resolve: {
                user: function(UserLoader) {
                    return UserLoader();
                }
            }
        }).otherwise({
            redirectTo: '/'
        });
    });
    domReady(function() {
        angular.bootstrap(document, ['MyApp']);
        $('html').addClass('ng-app: MyApp');
    });
});