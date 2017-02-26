'use strict';

import templateUrl from './test.html';
import kyckUrl from './pdf.kyck.html';
//import userUrl from './pdf.user.html';
//import validationUrl from './pdf.validation.html';
import controller from './test.controller';

function routeConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('main.pdf', {
		url: '/Pdf',
		templateUrl,
		controller,
		controllerAs: 'vm',
		breadCrumb: 'PDF'
	})
	// .state('main.pdf.kyck', {
	// 	url: '/Kyck',
	// 	templateUrl: kyckUrl,
	// 	controller: function(){},
	// 	controllerAs: 'vm',
	// 	breadCrumb: 'Kyck'
	// })
	// .state('main.pdf.user', {
	// 	url: '/User',
	// 	templateUrl: userUrl,
	// 	controller: function(){},
	// 	controllerAs: 'vm',
	// 	breadCrumb: 'User'
	// })
	// .state('main.pdf.validation', {
	// 	url: '/Validation',
	// 	templateUrl: validationUrl,
	// 	controller: function(){},
	// 	controllerAs: 'vm',
	// 	breadCrumb: 'Validation'
	// });
}

export default routeConfig;
