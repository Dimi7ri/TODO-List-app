app.controller('TasksController', function($scope , tasksFactory){
	$scope.tasks = null;
	
	function init(){
		tasksFactory.getTasks().success(function(tasks){
			$scope.tasks = tasks;
			alert(tasks.data.length);
		});
	}
	
	init();
});