var serverUrl = 'http://127.0.0.1:8080';

app.factory('AddTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	save: { method: 'POST' }
    });
});

app.factory('EditTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks/:id',{}, {
    	update: { method: 'PUT' }
    });
});

app.factory('ListTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('ListTasksByIdFactory', function ($resource) {
    return $resource(serverUrl + '/tasks/:id',{}, {
    	query: { method: 'GET' }
    });
});

app.factory('TasksPrioritiesListFactory', function ($resource) {
    return $resource(serverUrl + '/populateTasksPriorities', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('DataTasksFactory', function(){
	  var TasksList = [];

	  var init = function(tasksList){
		  TasksList = angular.copy(tasksList);
		  angular.copy(tasksList, TasksList);
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