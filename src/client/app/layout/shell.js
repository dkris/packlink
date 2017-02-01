(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', 'config', 'logger', '$translate'];

    function Shell($timeout, config, logger, $translate) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = config.appTitle;
        vm.changeLanguage = changeLanguage;


        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }

        function changeLanguage(langKey) {
            $translate.use(langKey);
        }


    }
})();