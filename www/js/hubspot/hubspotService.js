angular.module('mijHubspot')
    .factory('HubspotService', function($http, APIService){
        var baseUrl = "https://api.hubapi.com";
        var hubspot_api_key = APIService.HubspotAPIKey();
        var functions = {
            get: function(endpoint, params, data, headers) {
                if(!params) var params = {};
                return $http.get(baseUrl+endpoint, {params: functions.addApiKey(params), data: data, headers: headers})
            },
            addApiKey: function(params){
                params['hapikey'] = hubspot_api_key;
                return params;
            }
        };
        return functions;
    })