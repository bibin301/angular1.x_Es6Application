'use strict';

import templateUrl from './chart.html';
import controller from './chart.controller';

function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('main.chart', {
		url: '/Chart',
		templateUrl,
		controller,
		controllerAs: 'vm',
		breadCrumb: 'Chart'
	})

}

export default routeConfig;
