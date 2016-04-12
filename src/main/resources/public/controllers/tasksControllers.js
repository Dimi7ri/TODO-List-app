app.controller('AddTasksController', function($scope , $location, DataTasksFactory, AddTasksFactory, $route ){
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.save(addNewTaskCtrl);
		DataTasksFactory.addTask(addNewTaskCtrl);
		$location.path('/');
	};
});

app.controller('EditTasksController', function($scope, $location, ListTasksByIdFactory, EditTasksFactory, $route, $routeParams ){
			//Retrieve selected task
	var selectedTask = ListTasksByIdFactory.query({id:$routeParams.id});
	selectedTask.$promise.then(function(result){
			//Populate scope variables
		$scope.editTaskCtrl.taskname = result.taskname;
		$scope.editTaskCtrl.performdate = new Date(result.performdate);
		$scope.editTaskCtrl.category = result.category;
		$scope.editTaskCtrl.priority = result.priority;
		$scope.editTaskCtrl.isdone = result.isdone;
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

app.controller('TasksActionsController', function($scope, $location, ListTasksByIdFactory, EditTasksFactory, DeleteTasksFactory) {
    
	$scope.hoverIn = function(){
        this.Icon = true;
    };

    $scope.hoverOut = function(){
        this.Icon = false;
    };
    
    $scope.checkTask = function(taskid) {
    	var selectedTask = ListTasksByIdFactory.query({id:taskid});
    	selectedTask.$promise.then(function(result){
    			//Populate function variables to generate PUT request.
    		selectedTask.taskname = result.taskname;
    		selectedTask.performdate = new Date(result.performdate);
    		selectedTask.category = result.category;
    		selectedTask.priority = result.priority;
    			//Checking task makes isdone = "true"
    		selectedTask.isdone = "true";
    		
    		EditTasksFactory.update({id:taskid},selectedTask);
    	});
    	location.reload(true);
     };
     
    // <<-- EditTask has its separate controller: EditTasksController.
     
    $scope.deleteTask = function(taskid) {
        DeleteTasksFactory.delete_task({id:taskid},null);
		location.reload(true);
     };
});
    