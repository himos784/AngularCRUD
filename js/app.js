var app = angular.module('myApp', []);

app.controller("MyController",['$scope',function($scope){
	$scope.datas = [
		{
			id: 1,
			name: 'User 1',
            address: 'Address 1',
            email: 'email1@email.com'
		},
		{
			id: 2,
			name: 'User 2',
            address: 'Address 2',
            email: 'email2@email.com'
		},
		{
			id: 3,
			name: 'User 3',
            address: 'Address 3',
            email: 'email3@email.com'
		},
		{
			id: 4,
			name: 'User 4',
            address: 'Address 4',
            email: 'email4@email.com'
		},
		{
			id: 5,
			name: 'User 5',
            address: 'Address 5',
            email: 'email5@email.com'
		},
		{
			id: 6,
			name: 'User 6',
            address: 'Address 6',
            email: 'email6@email.com'
		}
	];

	$scope.dataDelete = function(id){
		$scope.datas.splice(id,1);
	}
}]);
