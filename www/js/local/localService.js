angular.module('mijLocal')
    .factory('LocalService', function(HubspotService){
        var functions = {
            getCompanies: function(offset){
                if(!offset) var offset = 0;
                var fields_string = '&properties=address&properties=address2&properties=city';
                return HubspotService.get('/companies/v2/companies/paged?1=1'+fields_string, {offset: offset});
            },
            getCompaniesProperties: function(){
                return HubspotService.get('/properties/v1/companies/properties/')
            }
        };
        return functions;
    })