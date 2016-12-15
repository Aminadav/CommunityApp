angular.module('mijNews')
    .factory('NewsService', function($http){
        var news = [];
        var functions = {
            getNews: function(){
                var url = "https://spreadsheets.google.com/feeds/list/" +
                    "1EYuSxR6FeOlpa9IgkUcClaVy-aPIz0etbWr8wypEyqs/od6/public/values?alt=json";
                return $http({
                    method: 'GET',
                    url: url
                }).then(function(response){
                    news = response.data.feed.entry;
                    return news;
                })

            }
        };
        return functions;
    })