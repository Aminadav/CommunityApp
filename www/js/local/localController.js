angular.module('mijLocal')
    .controller('LocalCtrl', function($scope, $ionicLoading, LocalService) {
        $scope.initializeMap = function() {
            var uluru = {lat: -25.363, lng: 131.044};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
            $scope.map = map;
        },
        $scope.getProperties = function() {
            LocalService.getCompaniesProperties()
                .then(function (data) {
                    for (var i in data.data) {
                        console.log(data.data[i].name)
                    }
                });
        };

        var companies = {};
        $scope.getCompanies = function(offset){
            LocalService.getCompanies(offset)
                .then(function(data){
                    var temp_companies = data.data['companies'];
                    for(var i in temp_companies) {
                        if(temp_companies[i].properties['address']) {
                            console.log(temp_companies[i].properties['address'], temp_companies[i].properties['city']);
                            companies[temp_companies[i].companyID] = temp_companies[i];
                        }
                    }
                    console.log(companies);
                    if(data.data['has-more']){
                        $scope.getCompanies(data.data.offset);
                    } else {
                        console.log(companies);
                    }
                })
        };

        //$scope.initializeMap();
    })