(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('ClientesCtrl', ClientesCtrl)

    function ClientesCtrl($scope, clientes){

      function cargarListaClientes(){
        clientes.obtenerTodos().then(function(listaClientes){
          $scope.listaClientes = listaClientes;
        })
      };

      function mostrarToast(mensaje){
        $scope.$parent.mdToast.show($scope.$parent.mdToast.simple()
        .position('top left')
        .textContent(mensaje)
        .hideDelay(3000));
      };

      $scope.cliente = {telefonos:[]};

      $scope.telefonoAgregado;

      $scope.razonSocialIgualNombre = false;

      $scope.agregarTelefono = function(){
        $scope.cliente.telefonos.push($scope.telefonoAgregado);
        $scope.telefonoAgregado = undefined;
      }

      $scope.eliminarTelefono = function(telefonoIndex){
        $scope.cliente.telefonos.splice(telefonoIndex, 1);
      }

      $scope.guardarcliente = function guardarcliente(form){

        if($scope.cliente.telefonos.length == 0 && angular.isDefined($scope.telefonoAgregado))
          $scope.cliente.telefonos.push($scope.telefonoAgregado);

        clientes.agregar($scope.cliente).then(function(respuesta){
          $scope.listaClientes.push($scope.cliente);
          $scope.limpiarGuardarCliente(form);
          mostrarToast('¡El cliente se ha registrado con \u00F1xito!');
        });
      };

      $scope.ponerRazonSocialComoNombre = function(){
        if($scope.razonSocialIgualNombre)
          $scope.cliente.razonSocial = $scope.cliente.nombre;
        else
          $scope.cliente.razonSocial = '';
      };

      $scope.limpiarGuardarCliente = function(form){
        $scope.cliente = {telefonos: []};
        $scope.razonSocialIgualNombre = false;
        $scope.telefonoAgregado = undefined;
        form.$setPristine();
        form.$setUntouched();
      };



      cargarListaClientes();

    }

}());
