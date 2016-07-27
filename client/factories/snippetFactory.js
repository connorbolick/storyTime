myApp.factory('SnippetFactory', ['$http', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.

	var factory = {};
  var snippets = [];


	factory.createSnippet = function(info, callback){
		console.log('made it to snippet factory');
		$http.post('/snippets', info).then(function(data){
			console.log('back from backend -> this is snippet', data);
			if(data.error){
				console.log(data.error);
			} else {
				stories.push(data.data);
				callback(snippets);
			}
		})
	};

	return factory;
}])
