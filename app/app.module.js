angular.module('thompsonrecipes', ['ngRoute'])

	.controller('loginController', [ '$scope' , function($scope){
		vm = this;

		vm.test = "test";
	}])

	.controller('homeController', [ '$scope' , function($scope){
		vm = this;

		$(document).foundation();
	}])

	.controller('recipeController', [ '$scope' , function($scope){
		vm = this;

		$(document).foundation();
	}]);