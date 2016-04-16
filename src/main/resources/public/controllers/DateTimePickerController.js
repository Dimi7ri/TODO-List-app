app.controller('DateTimePickerController',function ($scope, $timeout) {
	$scope.dateTimeNow = function() {
    $scope.date = new Date();
	};
	$scope.dateTimeNow();
  
	$scope.toggleMinDate = function() {
		var minDate = new Date();
			//Minimum date set to now
		minDate.setDate(minDate.getDate());
		$scope.minDate = $scope.minDate ? null : minDate;
	};
   
	$scope.toggleMinDate();

	$scope.dateOptions = {
		showWeeks: false
	};
  
	$scope.open = function($event,opened) {
		$event.preventDefault();
		$event.stopPropagation();
    	$scope.dateOpened = true;
	};
  
	$scope.dateOpened = false;
	$scope.hourStep = 1;
	$scope.format = "dd-MM-yyyy";
	$scope.minuteStep = 1;

	$scope.showMeridian = true;
	$scope.timeToggleMode = function() {
		$scope.showMeridian = !$scope.showMeridian;
	};
  
	$scope.$watch("date", function(date) {
		// read date value
	}, true);
  
	$scope.resetHours = function() {
		$scope.date.setHours(1);
	};
});