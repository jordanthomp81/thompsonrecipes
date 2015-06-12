var app = angular.module('fakeFacebook')

	// create our main controller and get access to firebase
		.controller('FriendsController', [ '$scope', '$firebase', '$http', function($scope, $firebase, $http) {
			
			$http.get('https://fakefacebook.firebaseio.com/users.json')
			.success(function(data) {
				$scope.users = data;
			});

		}]);