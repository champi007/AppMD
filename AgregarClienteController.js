(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('AgregarClienteCtrl', AgregarClienteCtrl)

    /** @ngInject */
    function AgregarClienteCtrl($scope,clientes){
        $scope.cliente={};
      $scope.guardarcliente= function guardarcliente()
      {
            console.log($scope.cliente);
            clientes.agregar($scope.cliente).then(function(respuesta){
                console.log(respuesta);
            })
      }

    }

}());