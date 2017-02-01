(function() {
	'use strict';

	angular.module('app.layout', ['pascalprecht.translate'])
		.config(function($translateProvider) {
			$translateProvider.translations('en', {
				SELECT_SERVICE: 'Select a service',
				ORDER_BY: 'Order by',
				BEST_PRICE_FIRST: 'Best price first',
				SHORTEST_TRANSIT_TIME_FIRST: 'Shortest transit time first',
				FULL_DETAILS: 'Full details',
				SECURE_PAYMENT_GUARANTEED: "Secure payment guaranteed",
				SELECT_THIS: 'Select this',
				ESTIMATED: "estimated"
			});
			$translateProvider.translations('es', {
				SELECT_SERVICE: 'Seleccione un servicio',
				ORDER_BY: 'Ordenar por',
				BEST_PRICE_FIRST: 'Mejor precio primero',
				SHORTEST_TRANSIT_TIME_FIRST: 'El tiempo de tránsito más corto primero',
				FULL_DETAILS: 'Todos los detalles',
				SECURE_PAYMENT_GUARANTEED: "Pago seguro garantizado",
				SELECT_THIS: 'Seleccione esto',
				ESTIMATED: "estimado"
			});
			$translateProvider.preferredLanguage('en');
		});
})();