app.controller('AddTasksController', function($scope, $location, AddTasksFactory , $route ){
		
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.saveTask(addNewTaskCtrl);
		$location.path('/')
		location.reload(true);
	};
});

app.controller('ListTasksController', function($scope , ListTasksFactory, $route){
	$scope.tasks = ListTasksFactory.getTasks();

});

app.controller('TasksPrioritiesListController', function($scope, TasksPrioritiesListFactory) {
	$scope.items = TasksPrioritiesListFactory.getTasksPrioritiesList();

});