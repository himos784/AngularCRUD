var app = angular.module('myApp', []);

app.controller("MyController",['$scope',function($scope){

	$scope.datas = [
		{
			name: 'User 1',
            address: 'Address 1',
            email: 'email1@email.com'
		},
		{
			name: 'User 2',
            address: 'Address 2',
            email: 'email2@email.com'
		},
		{
			name: 'User 3',
            address: 'Address 3',
            email: 'email3@email.com'
		},
		{
			name: 'User 4',
            address: 'Address 4',
            email: 'email4@email.com'
		},
		{
			name: 'User 5',
            address: 'Address 5',
            email: 'email5@email.com'
		},
		{
			name: 'User 6',
            address: 'Address 6',
            email: 'email6@email.com'
		}
	];

	$scope.form_data = {};

	$scope.form_data_id = "-";

	$scope.form_status = "disabled";

	$scope.dataSave = function(id) {
		if( id != "-"){
			$scope.datas[id] = $scope.form_data;
			$scope.form_data = {};
			$scope.form_data_id = "-";
		}
		else{
	   		$scope.datas.push($scope.form_data);
	    	$scope.form_data = {};
		}
		$scope.form_status = "disabled";
	};

	$scope.dataAdd = function() {
		$scope.form_status = "";
		alert($scope.form_status);
	};

	$scope.dataEdit = function(id) {
		$scope.form_data_id = id;
	    $scope.form_data = $scope.datas[id];
	};

	$scope.dataDelete = function(id){
		$scope.datas.splice(id,1);
	}
}]);
