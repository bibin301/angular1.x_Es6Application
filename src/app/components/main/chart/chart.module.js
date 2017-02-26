'use strict';

import route from './chart.route';


const chartModule = angular.module('chart-module', [
	'ui.router',
	'navigation-module'
	]);

chartModule
.config(route);

export default chartModule;
