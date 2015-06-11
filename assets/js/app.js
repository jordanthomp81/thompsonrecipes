var app = angular.module('fakeFacebook', ['ngRoute', 'firebase']);

  app.controller('LogoutController', function() {

  });

  app.controller('LogoutController', function() {

  });



	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          .when('/', {
              templateUrl : '/views/login.html',
              controller : 'AuthCtrl',
              controllerAs: 'auth'
          }).when('/logout', {
              templateUrl : '/views/logout.html',
              controller : 'LogoutController'
          }).when('/settings', {
              templateUrl : '/views/settings.html',
              controller : 'LogoutController'
          }).when('/messages', {
              templateUrl : '/views/messages.html',
              controller : 'LogoutController'
          }).when('/friends', {
              templateUrl : '/views/friends.html',
              controller : 'LogoutController'
          });

      $locationProvider.html5Mode(true);
  }]);

app.controller('AuthCtrl', [
  '$scope', '$rootScope', '$firebaseAuth', function($scope, $rootScope, $firebaseAuth) {
    var ref = new Firebase('https://fakefacebook.firebaseio.com/');
    $rootScope.auth = $firebaseAuth(ref);
        
    $scope.signIn = function () {
      ref.authWithPassword({
        email    : $scope.email,
        password : $scope.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
      } else {
          console.log("Authenticated successfully with payload:", authData);
          console.log(authData.password.email);
          $scope.welcome = "Welcome! " + authData.password.email;
      }
;      });
    }

    $scope.signUp = function() {
      $rootScope.auth.$createUser($scope.email, $scope.password, function(error, user) {
        if (!error) {
          $rootScope.alert.message = '';
        } else {
          $rootScope.alert.class = 'danger';
          $rootScope.alert.message = 'The username and password combination you entered is invalid.';
        }
      });
    }
  }
]);

app.controller('AlertCtrl', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.alert = {};
  }
]);
