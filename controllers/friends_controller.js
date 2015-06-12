var app = angular.module('fakeFacebook')

	// create our main controller and get access to firebase
		.controller('FriendsController', [ '$scope', '$firebase', function($scope, $firebase) {

		// connect to firebase 
		var ref = new Firebase("https://fakefacebook.firebaseio.com/");  
		var fb = $firebase(ref);

		// sync as object 
		var syncObject = fb.$asObject();

		// three way data binding
		syncObject.$bindTo($scope, 'names');

	}]);