'use strict';

class testController {
    constructor(testService, $state, $scope, $rootScope) {
        'ngInject';

        this._testService = testService;
        this._$state = $state;
        this._$scope = $scope;
        // this._$rootScope = $rootScope;
        // this.invalidCredentials = false;

    }

    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; //January is 0!
    //
    // var yyyy = today.getFullYear();
    // if(dd<10){
    //     dd='0'+dd;
    // }
    // if(mm<10){
    //     mm='0'+mm;
    // }
    // var today = dd+'/'+mm+'/'+yyyy;
    // document.getElementById("DATE").value = today;

    //sto function get kyck pdf
    getKyck(uId) {
        console.log(uId);
        let userId = uId;
        this._testService.userkycpdf(userId).then((data) => {
            $rootScope.loadingProgress = false;
            console.log("success", data);
            if (data) {

                //window.open("data:application/pdf;base64, " + data.data, '', 'height=650,width=840');

                var file = new Blob([data.data], {
                    type: 'application/pdf'
                }); // create blob object
                var fileURL = URL.createObjectURL(file);
                //  window.open(fileURL '', 'height=650,width=840');
                window.open(fileURL, 'height=650,width=840');
            }
        });
    };

    //eno function get kyck pdf


    //sto function get user pdf
    getprofilepdf(uId) {

        let userId = uId;
        this._testService.userprofilepdf(userId).then((data) => {
            $rootScope.loadingProgress = false;
            console.log("success", data);
            var file = new Blob([data.data], {
                type: 'application/pdf'
            }); // create blob object
            var fileURL = URL.createObjectURL(file);
            //window.open(fileURL '', 'height=650,width=840');
            window.open(fileURL, 'height=650,width=840');
        });
    };


    //eno function get user pdf


    //sto function get validation pdf

    getValidationpdf(uId) {
        console.log(uId);
        let userId = uId;
        this._testService.validationpdf(userId).then((data) => {
            $rootScope.loadingProgress = false;
            console.log("success", data);
            var file = new Blob([data.data], {
                type: 'application/pdf'
            }); // create blob object
            var fileURL = URL.createObjectURL(file);
            //window.open(fileURL '', 'height=650,width=840');
            window.open(fileURL, 'height=650,width=840');
        });
    };
    //eno function get validation pdf

}

export default testController;
