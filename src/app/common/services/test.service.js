'use strict';

class testService {
constructor($http, AppConstants, $rootScope,$state,AuthenticationService) {
		'ngInject';
		this._$http = $http;
		this._AppConstants = AppConstants;
		this._$rootScope = $rootScope;

	}
//  /download/userkycpdf
//  /download/userprofilepdf
// /download/validationpdf

	userkycpdf(usrId) {
		console.log("testservice userkycpdf" ,usrId);
		this._$rootScope.loadingProgress=true;
		return this._$http({
			method: 'get',
			url: '/kyck-rest/download/userkycpdf',
			params: {
					userId: usrId
			},
			// 'headers':{
			// 	"Content-type:application/pdf"
			// }


		})
		.then((response)=>{
			return response;
		});
	};


userprofilepdf(usrId){
	console.log("testservice userprofilepdf" ,usrId);
	this._$rootScope.loadingProgress=true;
	return this._$http({
		method: 'get',
		url: '/kyck-rest/download/userprofilepdf',
			//  responseType: 'arraybuffer',
		params: {
				userId: usrId
		},

	})
	.then((response)=>{
		return response;
	});
};

validationpdf(usrId){
	console.log("testservice userprofilepdf" ,usrId);
	this._$rootScope.loadingProgress=true;
	return this._$http({
		method: 'get',
		url: '/kyck-rest/download/validationpdf',
		params: {
				userId: usrId
		},
	})
	.then((response)=>{
		return response;
	});
};

getChart(){
	console.log("chart js");
	this._$rootScope.loadingProgress=false;
	return this._$http({
		method: 'get',
		url: 'chart.json',

	})
	.then((response)=>{
		return response;
	});
};

}

export default testService;
