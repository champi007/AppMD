myApp
    .controller('ServicioCtrl', function($scope) {
      $scope.TServicios = [
          "mantenimiento",
          "recarga",
          "venta",
          
      ];
                  
                        

                    
                           $scope.orden={};
                      $scope.guardarorden= function guardarorden(ordenes)
                         {
                             console.log($scope.orden);
                             ordenes.agregar($scope.orden).then(function(respuesta){
                              console.log(respuesta);
                                 })
                          };


          });