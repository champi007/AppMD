(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('AgregarAccesorioCtrl', AgregarAccesorioCtrl)

    /** @ngInject */
    function AgregarAccesorioCtrl($scope,accesorios){
      $scope.guardarAccesorio= function guardarAccesorio()
      {
            var accesorio={nombre:$scope.nombreAccesorio }; console.log(accesorio);
            accesorios.agregar(accesorio).then(function(respuesta){
                console.log(respuesta);
            })
      }

    }

}());