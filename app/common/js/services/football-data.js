module.exports = function (ngModule) {
    ngModule.service('FootballData', FootballData);

    FootballData.$inject = ['$http'];
    function FootballData ($http, config) {

        var get = function(config) {
            $http.defaults.headers.get = { 'X-Auth-Token' : '6361b22678c9489a837087e19ae65447' };
            return $http.get('http://api.football-data.org/v1/' + config);
        };

        return {
            get: get
        };
    };

};
