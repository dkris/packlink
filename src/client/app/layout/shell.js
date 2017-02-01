(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config', 'logger'];

    function Shell($timeout, config, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = config.appTitle;

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();
