angular.module('thompsonrecipes')

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          //.when('/', {
          //    templateUrl : '/app/components/homepage/homepage.html',
          //    controller : 'homeController',
          //    controllerAs: 'home'
          //})
          .when('/', {
              templateUrl : '/app/components/recipes/add_recipe.html',
              controller : 'addRecipeController'
          }).when('/login', {
              templateUrl : '/app/components/login/login.html',
              controller : 'loginController',
              controllerAs: 'login'
          }).when('/recipes', {
              templateUrl : '/app/components/recipes/recipes.html',
              controller : 'recipeController',
              controllerAs: 'recipe'
          }).when('/home', {
              templateUrl : '/app/components/homepage/homepage.html',
              controller : 'homeController',
              controllerAs: 'home'
          }).when('/add_recipe', {
              templateUrl : '/app/components/recipes/add_recipe.html',
              controller : 'addRecipeController'
          }).when('/recipe/:id', {
              templateUrl : '/app/components/recipes/recipe_page.html',
              controller : 'recipePageController',
          });

      $locationProvider.html5Mode(true);
  }]);