(function() {
    'use strict';

    angular
        .module('app.servicepicker')
        .run(appRun);

    // appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/servicepicker/servicepicker.html',
                    controller: 'ServicePicker',
                    controllerAs: 'vm',
                    title: 'servicepicker',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();
