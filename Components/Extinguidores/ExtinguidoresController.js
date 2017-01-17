myApp.controller('ExtinguidoresCtrl', function($scope, extinguidores) {

  function mostrarToast(mensaje){
    $scope.$parent.mdToast.show($scope.$parent.mdToast.simple()
    .position('top left')
    .textContent(mensaje)
    .hideDelay(3000));
  };

  function cargarExtinguidores(){
    extinguidores.obtenerTodos().then(function(listaExtinguidores){
      $scope.listaExtinguidores = listaExtinguidores;
    })
  }

  $scope.extinguidor = {};
  $scope.unidadesCapacidadExtinguidor;

  $scope.limpiarGuardarExtinguidor = function(form){
    $scope.extinguidor = {};
    $scope.unidadesCapacidadExtinguidor = undefined;
    form.$setPristine();
    form.$setUntouched();
  };

  $scope.registrarExtinguidor = function (form){
     $scope.extinguidor.capacidad = $scope.extinguidor.capacidad.toString() + ' ' + $scope.unidadesCapacidadExtinguidor;
      extinguidores.agregar($scope.extinguidor).then(function(respuesta){
          $scope.listaExtinguidores.push($scope.extinguidor);
          $scope.limpiarGuardarExtinguidor(form)
          mostrarToast('¡El extinguidor se ha registrado con \u00F1xito!')
      })
  }

  cargarExtinguidores();

});
