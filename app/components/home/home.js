module.exports = function (ngModule) {

    ngModule.component('homeComp', {
        template: require('./home.jade')(),
        controllerAs: 'homeCtrl',
        controller: ['FootballData', controller]
    });

    function controller(FootballData) {
        var homeCtrl = this;

        homeCtrl.$onInit = function () {
            var config1 = 'soccerseasons/424/';
            var config2 = 'soccerseasons/424/fixtures';

            FootballData.get(config1).then(function (response) {
                homeCtrl.caption = response.data.caption;
                homeCtrl.matchday = response.data.currentMatchday;
            });

            FootballData.get(config2).then(function(response) {
                var fixtures = response.data.fixtures;
                homeCtrl.todaysFixtures = fixtures.filter(function (fixture) {
                    var fixtureDay = new Date(fixture.date).getDate(),
                        todaysDay = new Date().getDate();
                    return fixtureDay === todaysDay;
                });
            });
        };
    }
};
