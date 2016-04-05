app.controller('AddTasksController', function($scope , $location, DataTasksFactory, AddTasksFactory, $route ){
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.save(addNewTaskCtrl);
		DataTasksFactory.addTask(addNewTaskCtrl);
		$location.path('/');
	};
});

app.controller('EditTasksController', function($scope, $location, ListTasksByIdFactory, EditTasksFactory, $route, $routeParams ){
	$scope.editTaskCtrl = ListTasksByIdFactory.query({id:$routeParams.id});
	//to fix
	this.editTask = function(editTaskCtrl){
		//console.log($scope.editTaskCtrl);
		//var editedTask = {"taskname":"Batman","performdate":15,"category":"Other","priority":"MEDIUM"};
		//EditTasksFactory.update({id:$routeParams.id},editedTask);
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
        this.EditIcon = true;
    };

    $scope.hoverOut = function(){
        this.EditIcon = false;
    };
});
    