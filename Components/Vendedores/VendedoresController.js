(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('VendedoresCtrl', VendedoresCtrl)

    function VendedoresCtrl($scope, vendedores){
      function cargarVendedores(){
        vendedores.obtenerTodos().then(function(listaVendedores){
          $scope.listaVendedores = listaVendedores;
        })
      }

      function mostrarToast(mensaje){
        $scope.$parent.mdToast.show($scope.$parent.mdToast.simple()
        .position('top left')
        .textContent(mensaje)
        .hideDelay(3000));
      };

      $scope.vendedor={telefonos: []};
      $scope.telefonoAgregado;

      $scope.agregarTelefono = function(){
        $scope.vendedor.telefonos.push($scope.telefonoAgregado);
        $scope.telefonoAgregado = undefined;
      }

      $scope.eliminarTelefono = function(telefonoIndex){
        $scope.vendedor.telefonos.splice(telefonoIndex, 1);
      }

      $scope.limpiarGuardarVendedor = function(form){
        $scope.vendedor = {telefonos: []};
        $scope.telefonoAgregado = undefined;
        form.$setPristine();
        form.$setUntouched();
      };

      $scope.registrarVendedor= function (form){
        if($scope.vendedor.telefonos.length == 0 && angular.isDefined($scope.telefonoAgregado))
          $scope.vendedor.telefonos.push($scope.telefonoAgregado);

        vendedores.agregar($scope.vendedor).then(function(respuesta){
          $scope.listaVendedores.push($scope.vendedor);
          $scope.limpiarGuardarVendedor(form);
          mostrarToast('¡El vendedor se ha registrado con \u00F1xito!');
        });
      };

      cargarVendedores();

    }
}());
