angular.module('mijEvents')
    .factory('EventsService', function($http){
        var events = null;
        var functions = {
            getEvents:function(){
                var time = new Date(Date.now()).toISOString();
                return $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/calendar/v3/calendars/' +
                    'cjohljus7rnidrvjomlg03a8h0@group.calendar.google.com/events' +
                    '?key=AIzaSyCrVK3aklRhWNnYOQaT2kXY93XziUl1mTI' +
                    '&timeMin=' + time +
                    '&orderBY=startTime&singleEvents=true',
                }).then(function(response){
                    events = response.data.items;
                    return response;
                });
            },
        };
        return functions;
    })