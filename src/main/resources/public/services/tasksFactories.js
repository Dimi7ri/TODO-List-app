var serverUrl = 'http://127.0.0.1:8080';

app.factory('AddTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	save: { method: 'POST' }
    });
});

app.factory('EditTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('ListTasksFactory', function ($resource) {
    return $resource(serverUrl + '/tasks', {}, {
    	query: { method: 'GET', isArray: true }
    })
});

app.factory('TasksPrioritiesListFactory', function ($resource) {
    return $resource(serverUrl + '/populateTasksPriorities', {}, {
    	query: { method: 'GET', isArray: true }
    })
});