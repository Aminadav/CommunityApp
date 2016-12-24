angular.module('mijNews')
    .controller('NewsCtrl', function($scope, NewsService) {
        $scope.data = {};

        $scope.getTwitterPosts = function(){
            NewsService.getTwitterPosts(function(news){
                $scope.data['news'] = JSON.parse(news);
                $scope.$apply();
            });
        }

        $scope.getTwitterPosts();

    })