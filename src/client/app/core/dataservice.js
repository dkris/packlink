(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getServices: getServices,
            ready: ready
        };

        return service;

        function getServices() {
            return $http.get('/api/services')
                .then(getServicesComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getServices')(message);
                    $location.url('/');
                });

            function getServicesComplete(data, status, headers, config) {
                return data.data.services;
            }
        }


        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }

    }
})();
