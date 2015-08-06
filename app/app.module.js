angular.module('thompsonrecipes', ['ngRoute'])

	.controller('loginController', [ '$scope' , function($scope){
		vm = this;

		vm.test = "test";
	}])

	.controller('homeController', [ '$scope' , function($scope){
		vm = this;

		$(document).foundation();
	}])

	.controller('recipeController', [ '$scope', '$http' , function($scope, $http){

		// Go to firebase and grab all the recipes
		$http.get('https://thompsonrecipes.firebaseio.com/recipes.json')
		.success(function(data) {
			$scope.recipes = data;
			debugger;
		});


		$(document).foundation();
	}])

	// Controller for the add recipe form page
	.controller('addRecipeController', [ '$scope' , '$location', function($scope, $location){

		// dataUrl stores the base64 version of the image
		// uploaded to the form
		var dataUrl;

		// This function is called when you hit submit on the form
		$scope.capture = function() {
			// grab the remaining form field values
			var recipeName = $scope.recipeName;
			var cookTime = $scope.cookTime;
			var instructions = $scope.instructions;
			var imageLink = $scope.imageLink;
			debugger;
			// create the firebase object
			var myFirebaseRef = new Firebase("https://thompsonrecipes.firebaseio.com/recipes");

			// push the form values, and compressed image to firebase
			myFirebaseRef.push({
			  	recipe_name: recipeName,
			  	recipe_cook_time: cookTime,
			  	recipe_intructions: instructions,
			  	recipe_image: imageLink
			}).once('child_added', function() {
				$location.path('/');
			});

		}

		// This function is called when there is a change on the form 
		// field input tag. It then displays the input image on the page
		$scope.readURL = function(input) {	
		  if (input.files && input.files[0]) {
		    var reader = new FileReader();
		    reader.onload = function (e) {
		      $('#image-preview')
		        .attr('src', e.target.result)
		        .width('auto')
		        .height('auto');
		        dataUrl = e.target.result;

		    };
		    reader.readAsDataURL(input.files[0]);
		  }
		}

		$scope.upload = function(file) {
			/* Is the file an image? */
	        if (!file || !file.type.match(/image.*/)) return;
	        /* It is! */
	        /* Lets build a FormData object*/
	        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
	        fd.append("image", file); // Append the file
	        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
	        xhr.open("POST", "https://api.imgur.com/3/image.json"); // Boooom!
	        xhr.onload = function() {
	            // Big win!
	            $scope.imageLink = JSON.parse(xhr.responseText).data.link;
	        }
	        
	        xhr.setRequestHeader('Authorization', 'Client-ID b36881438f537c9'); // Get your own key http://api.imgur.com/
	        
	        // Ok, I don't handle the errors. An exercise for the reader.
	        /* And now, we send the formdata */
	        xhr.send(fd);
		}

		$(document).foundation();
	}]);