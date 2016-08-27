(function() {

    var OrdersController = function ($scope, $routeParams,customersFactory) {
	var customerId = $routeParams.customerId;
	$scope.customer = null;
	
	function init() {
	    customersFactory.getCustomer(customerId)
		.then(function(response) {
		    $scope.customer =response.data;
		    
		}, function(data,status,headers,config) {
		      
		// .success(function(customer){
		//     $scope.customer = customer[customerId-1];
		//     console.log("success here: " + customer[customerId-1].name);
		// })
		// .error(function(data,status,headers,config){
		//     //handle error
		//     console.log("error here");		    
		});

	}
	
	init();
    };

    OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];
    
    angular.module('customersApp')
	.controller('OrdersController', OrdersController);

}());

