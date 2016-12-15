angular.module('mijNews')
    .controller('NewsCtrl', function($scope, NewsService) {
        $scope.data = {};

        $scope.getNews = function(){
            NewsService.getNews()
                .then(function(news){
                    $scope.data['news'] = news;
                })
        }

        $scope.getNews();

    })