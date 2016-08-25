app.controller('CustomersController', function($scope) {	
		$scope.sortyBy ='name';
		$scope.reverse = false;
		
		$scope.customers = [{joined: '2000-12-02', name:'zharles', 
		city:'sapporo', orderTotal:'10'},{joined: '2000-12-02',
		 name:'jack', city:'sapporo', orderTotal:'11'},
		 y{joined: '2000-12-02', name:'marjaliisa', city:'sapporo', orderTotal:15}];
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	});