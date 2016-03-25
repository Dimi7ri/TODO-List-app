app.controller('AddTasksController', function($scope, $location, AddTasksFactory , $route ){
		
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.save(addNewTaskCtrl);
		$location.path('/')
		location.reload(true);
	};
});

app.controller('ListTasksController', function($scope , ListTasksFactory, $route){
	$scope.tasks = ListTasksFactory.query();

});

app.controller('TasksPrioritiesListController', function($scope, TasksPrioritiesListFactory) {
	$scope.items = TasksPrioritiesListFactory.query();

});