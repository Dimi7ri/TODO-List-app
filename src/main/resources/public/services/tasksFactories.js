app.factory('AddTasksFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/tasks', {}, {
    	save: { method: 'POST' }
    });
});

app.factory('EditTasksFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/tasks/:id',{}, {
    	update: { method: 'PUT' }
    });
});

app.factory('DeleteTasksFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/tasks/:id',{}, {
    	delete_task: { method: 'DELETE' }
    });
});

app.factory('ListTasksFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/tasks', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('ListTasksByIdFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/tasks/:id',{}, {
    	query: { method: 'GET' }
    });
});

app.factory('TasksPrioritiesListFactory', function ($resource, $location) {
    return $resource(($location.protocol() + "://" + $location.host() + ":" + $location.port()) + '/populateTasksPriorities', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('DataTasksFactory', function(){
	  var TasksList = [];

	  var init = function(tasksList){
		  TasksList = angular.copy(tasksList);
	  };
	  
	  var addTask = function(newtask) {
		  TasksList.push(newtask);
	  };

	  var getTasks = function(){
	      return TasksList;
	  };

	  return {
		  init : init,
		  addTask: addTask,
		  getTasks: getTasks
	  };
  });