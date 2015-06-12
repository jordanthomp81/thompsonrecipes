var app = angular.module('fakeFacebook', ['ngRoute', 'firebase']);

  app.controller('LogoutController', [ '$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
      var fb = new Firebase('https://fakefacebook.firebaseio.com/');

      fb.unauth(function(){
        $rootScope.auth = null;
        $rootScope.user = null;
        console.log($rootScope.auth);
        $location.path("/login")
        $scope.$apply();
      });
  }]);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

      $routeProvider

          .when('/', {
              templateUrl : '/views/newsfeed.html',
              controller : 'AuthCtrl',
              controllerAs: 'auth'
          }).when('/login', {
              templateUrl : '/views/login.html',
              controller : 'AuthCtrl',
              controllerAs: 'auth'
          }).when('/logout', {
              templateUrl : '/views/logout.html',
              controller : 'LogoutController'
          }).when('/settings', {
              templateUrl : '/views/settings.html'
          }).when('/messages', {
              templateUrl : '/views/messages.html'
          }).when('/friends', {
              templateUrl : '/views/friends.html',
              controller: 'FriendsController'
          }).when('/newsfeed', {
              templateUrl : '/views/newsfeed.html'
          }).when('/register', {
              templateUrl : '/views/register.html'
          });

      $locationProvider.html5Mode(true);
  }]);

app.controller('AuthCtrl', [
  '$scope', '$rootScope', '$firebaseAuth', '$location', '$http', function($scope, $rootScope, $firebaseAuth, $location, $http) {
    var ref = new Firebase('https://fakefacebook.firebaseio.com/');

    $http.get('https://fakefacebook.firebaseio.com/').success(function(data){
      console.log(data);
    });

    $rootScope.firebaseObj = ref;
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
          $rootScope.user = authData;

          $rootScope.$apply(function() {
            $location.path('/newsfeed');
          });
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

app.controller('NewsfeedController', [ '$rootScope', function($rootScope) {
  
}]);