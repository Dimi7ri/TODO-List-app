app.controller('AddTasksController', function($scope , $location, DataTasksFactory, AddTasksFactory, $route ){
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.save(addNewTaskCtrl);
		DataTasksFactory.addTask(addNewTaskCtrl);
		$location.path('/');
	};
});

app.controller('EditTasksController', function($scope, $location, ListTasksByIdFactory, EditTasksFactory, $route, $routeParams ){
	var selectedTask = ListTasksByIdFactory.query({id:$routeParams.id});
	selectedTask.$promise.then(function(result){
			//Populate scope variables
		$scope.editTaskCtrl.taskname = result.taskname;
		$scope.editTaskCtrl.performdate = new Date(result.performdate);
		$scope.editTaskCtrl.category = result.category;
		$scope.editTaskCtrl.priority = result.priority;
	});
	this.editTask = function(editTaskCtrl){
		EditTasksFactory.update({id:$routeParams.id},editTaskCtrl);
		$location.path('/');
	};
});
	
app.controller('ListTasksController', function($scope, DataTasksFactory, ListTasksFactory, $route){
	var task = ListTasksFactory.query();
	task.$promise.then(function (result) {
		DataTasksFactory.init(result);
	    $scope.tasks = DataTasksFactory.getTasks();
	});
});

app.controller('TasksPrioritiesListController', function($scope, TasksPrioritiesListFactory) {
	$scope.items = TasksPrioritiesListFactory.query();

});

app.controller('showActionIconsController', function($scope) {
    $scope.hoverIn = function(){
        this.Icon = true;
    };

    $scope.hoverOut = function(){
        this.Icon = false;
    };
});
    