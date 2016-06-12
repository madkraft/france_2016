module.exports = function (ngModule) {

    ngModule.component('fixtures', {
        template: require('./fixtures.jade')(),
        controllerAs: 'fixturesCtrl',
        controller: ['FootballData', controller]
    });

    function controller(FootballData) {
        var fixturesCtrl = this;

        fixturesCtrl.$onInit = function () {
            var config = 'soccerseasons/424/fixtures';
            var teams = [];

            FootballData.get(config).then(function(response) {
                fixturesCtrl.fixtures = response.data.fixtures;
            });
        };
    }
};
