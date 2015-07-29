angular.module('thompsonrecipes')

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          //.when('/', {
          //    templateUrl : '/app/components/homepage/homepage.html',
          //    controller : 'homeController',
          //    controllerAs: 'home'
          //})
          .when('/', {
              templateUrl : '/app/components/recipes/recipes.html',
              controller : 'recipeController',
              controllerAs: 'recipe'
          }).when('/login', {
              templateUrl : '/app/components/login/login.html',
              controller : 'loginController',
              controllerAs: 'login'
          }).when('/recipes', {
              templateUrl : '/app/components/recipes/recipes.html',
              controller : 'recipeController',
              controllerAs: 'recipe'
          });

      $locationProvider.html5Mode(true);
  }]);