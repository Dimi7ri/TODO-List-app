app.factory('tasksFactory', function($http){
	var factory = {};
	factory.getTasks = function(){
		return $http.get('/tasks.json');
	};
	return factory;
});