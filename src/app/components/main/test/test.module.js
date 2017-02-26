'use strict';

import route from './test.route';
import './pdf.scss';
import './pdf.responsive.scss';
import '../../../common/angularjs-datepicker/dist/angular-datepicker.min';
const testModule = angular.module('test-module', [
	'ui.router',
	'navigation-module',
	'720kb.datepicker'
	]);

testModule
.config(route);

export default testModule;
