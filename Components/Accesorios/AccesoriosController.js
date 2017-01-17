(function(){
    'use strict';

    angular
        .module('appDESCO')
        .controller('AccesoriosCtrl', AccesoriosCtrl)

    function AccesoriosCtrl($scope, accesorios){
      function mostrarToast(mensaje){
        $scope.$parent.mdToast.show($scope.$parent.mdToast.simple()
        .position('top left')
        .textContent(mensaje)
        .hideDelay(3000));
      };

      function cargarAccesorios(){
        accesorios.obtenerTodos().then(function(listaAccesorios){
          $scope.listaAccesorios = listaAccesorios;
        })
      }

      $scope.accesorio = {};

      $scope.limpiarGuardarAccesorio = function(form){
        $scope.accesorio = {};
        form.$setPristine();
        form.$setUntouched();
      };


      $scope.registrarAccesorio = function (form){
          accesorios.agregar($scope.accesorio).then(function(respuesta){
              $scope.listaAccesorios.push($scope.accesorio);
              $scope.limpiarGuardarAccesorio(form)
              mostrarToast('¡El accesorio se ha registrado con \u00F1xito!')
          })
      }

      cargarAccesorios();

    }

}());
