app.controller('AddTasksController', function($scope, $location, AddTasksFactory, $route ){
		
	this.addTask = function(addNewTaskCtrl){
		AddTasksFactory.save(addNewTaskCtrl);
		$location.path('/');
		location.reload(true);
	};
});

app.controller('EditTasksController', function($scope, $location, ListTasksByIdFactory, EditTasksFactory, $route, $routeParams ){
	$scope.editTaskCtrl = ListTasksByIdFactory.query({id:$routeParams.id});
	this.editTask = function(editTaskCtrl){
		EditTasksFactory.update({id:$routeParams.id},editTaskCtrl);
		$location.path('/');
		location.reload(true);
	};
});

app.controller('ListTasksController', function($scope , ListTasksFactory, $route){
	$scope.tasks = ListTasksFactory.query();

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
    