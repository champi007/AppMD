(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('VendedorCtrl', VendedorCtrl)

    /** @ngInject */
    function VendedorCtrl($scope,vendedores){
        $scope.vendedor={};
      $scope.guardarVendedor= function guardarVendedor()
      {
            console.log($scope.vendedor);
            vendedores.agregar($scope.vendedor).then(function(respuesta){
                console.log(respuesta);
            })
      }

    }

}());