var _ = require('lodash');

module.exports = {
    formatRouteParams: function (queryParams) {        
        var position = queryParams.slice(2,queryParams.indexOf('-l')).replace('/','-');
        var location = queryParams.slice(queryParams.indexOf('l-')+2,queryParams.length);

        return _.concat(position,location);
    },
    isUrlValid: function(queryParams){
        if(queryParams === undefined)
            return false;
        if(!_.some(queryParams, _.unary(_.partialRight(_.includes, 'q-')))
        || !_.some(queryParams, _.unary(_.partialRight(_.includes, 'l-'))))
            return false;
        return true;
    }
  };