(function() {
    'use strict';

    angular
        .module('app.servicepicker')
        .controller('ServicePicker', ServicePicker);

    ServicePicker.$inject = ['$filter', '$q', 'dataservice', 'logger'];

    function ServicePicker($filter, $q, dataservice, logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.news = {
            title: 'Marvel Avengers',
            description: 'Marvel Avengers 2 is now in production!'
        };
        vm.avengerCount = 0;
        vm.services = [];
        vm.title = 'Packlink Servicepicker';
        vm.order = order;

        activate();

        function activate() {
            return getServices().then(function() {
                logger.info('Hiiiiiiiiiiiiiii');
            });
        }

        function getServices() {
            return dataservice.getServices().then(function(data) {
                vm.services = data;
                return vm.services;
            });
        }

        function order(orderBy) {
            if (orderBy === 'transit') {
                vm.services = $filter('orderBy')(vm.services, 'service.transit_hours', true);
                console.log(vm.services);
            } else {
                vm.services = $filter('orderBy')(vm.services, 'service.price.total_price', true);
                console.log(vm.services);
            }
        }
    }
})();