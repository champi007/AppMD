myApp
    .controller('ServicioCtrl', function($scope) {
      $scope.TServicios = [
          "mantenimiento",
          "recarga",
          "venta",
          
      ];
                  (function(){
                       'use strict';

                         angular
                            .module('appDESCO')
                            .controller('OrdenServicioCtrl', OrdenServicioCtrl)

                          /** @ngInject */
                         function OrdenServicioCtrl($scope,ordenes){
                           $scope.orden={};
                      $scope.guardarorden= function guardarorden()
                         {
                             console.log($scope.orden);
                             ordenes.agregar($scope.orden).then(function(respuesta){
                              console.log(respuesta);
                                 })
                          }

                      }

               }());


          });