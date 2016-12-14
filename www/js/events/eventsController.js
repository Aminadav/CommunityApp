angular.module('mijEvents')
    .controller('EventsCtrl', function($scope, EventsService) {
        $scope.data = {
            events: []
        };

        $scope.getEvents = function() {
            EventsService.getEvents()
                .then(function(response){
                    $scope.data.events = response.data.items;
                });
        }

        $scope.getEvents();
    })