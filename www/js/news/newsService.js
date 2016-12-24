angular.module('mijNews')
    .factory('NewsService', function(){
        var localTwitter = null;
        var functions = {
            setTwitter: function(t)
            {
                localTwitter = t;
            },
            getTwitterPosts: function(success){
                return localTwitter.getUserTimeline({screen_name: 'MadeInJLM'},
                    function(err){
                        console.log(err);
                    },
                    success);

            }
        };
        return functions;
    })