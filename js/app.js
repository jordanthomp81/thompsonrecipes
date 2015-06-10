var app = angular.module('fakeFacebook', ['ngRoute'])

	.controller('NavigationController', function(){
		
	})

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/login', {
                templateUrl : '/views/services.html',
                controller : 'NavigationController'
            });

        $locationProvider.html5Mode(true);
    }]);