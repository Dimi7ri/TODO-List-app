var app = angular.module('ToDoListApp', ['ngRoute']);

		app.config(function($routeProvider){
				$routeProvider.when('/',
				{
					controller: 'TasksController',
					templateUrl: '/views/tasks.html'
				})
});