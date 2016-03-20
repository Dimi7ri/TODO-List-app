var serverUrl = 'http://127.0.0.1:8080';

app.factory('AddTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	saveTask: { method: 'POST' }
    });
});

app.factory('ListTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	getTasks: { method: 'GET', isArray: true }
    })
});

app.factory('TasksPrioritiesListFactory', function ($resource) {
    return $resource(serverUrl + '/populateTasksPriorities', {}, {
    	getTasksPrioritiesList: { method: 'GET', isArray: true }
    })
});