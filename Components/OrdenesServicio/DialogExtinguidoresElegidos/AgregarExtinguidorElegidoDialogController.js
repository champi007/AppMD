myApp.controller('AgregarExtinguidorElegidoDialogCtrl', function($scope, extinguidores, locals, $mdDialog, $timeout){
  function limpiarForm(form){
    form.$setPristine();
    form.$setUntouched();
  }

  function editandoExtinguidor(indexExtinguidor){
    if($scope.extinguidorEditado == $scope.extinguidoresElegidos[indexExtinguidor])
      return true;

      return false;
  }

  function buscarExtinguidorYaAgregado() {
    var buscarEnExtinguidoresElegidos = function(extinguidor){
      var encontrado = $scope.extinguidorElegidoModel.extinguidorObject._id === extinguidor.extinguidorObject._id &&
      $scope.extinguidorElegidoModel.tipoServicio === extinguidor.tipoServicio &&
      $scope.extinguidorElegidoModel.costoServicio === extinguidor.costoServicio &&
      $scope.extinguidorElegidoModel.prestado === extinguidor.prestado;

      return encontrado;
    };

    return $scope.extinguidoresElegidos.find(buscarEnExtinguidoresElegidos);
  }


  $scope.extinguidoresElegidos = Object.keys(locals).length == 0 ? [] : locals.extinguidoresElegidos
  $scope.extinguidorElegidoModel = {};
  $scope.extinguidorEditado = Object.keys(locals).length == 0 ? {} : locals.extinguidorEditado;
  $scope.editandoExtinguidor = Object.keys(locals).length == 0 ? false : true;

  $scope.cerrarDialog = function(){
      $mdDialog.cancel();
  }

  $scope.busqueda = '';

  $scope.agregarExtinguidorElegidoAElegidos = function(extinguidorForm){
    var extinguidorYaAgregado = buscarExtinguidorYaAgregado();
    if(angular.isUndefined(extinguidorYaAgregado)){
      $scope.extinguidorElegidoModel.extinguidor = $scope.extinguidorElegidoModel.extinguidorObject._id;
      $scope.extinguidoresElegidos.push($scope.extinguidorElegidoModel);
      $scope.extinguidorElegidoModel = {};
    }else{
      extinguidorYaAgregado.cantidad += $scope.extinguidorElegidoModel.cantidad;
      $scope.extinguidorElegidoModel = {};
    }

    limpiarForm(extinguidorForm);
  }

  $scope.editarExtinguidor = function(extinguidor){
    $scope.extinguidorEditado = extinguidor;
    $scope.editandoExtinguidor = true;
  }

  $scope.checarSiVenta = function(extinguidor){
    if(extinguidor.tipoServicio === 'Venta'){
      extinguidor.prestado = false;
    }
  }

  $scope.terminarEdicion = function(){
    $scope.editandoExtinguidor = false;
    $scope.extinguidorEditado = {};
  }

  $scope.eliminarExtinguidorDeElegidos = function(indexExtinguidor){
    if(editandoExtinguidor(indexExtinguidor))
      $scope.terminarEdicion();

    $scope.extinguidoresElegidos.splice(indexExtinguidor, 1);

  }

  $scope.agregarExtinguidoresElegidosAOrden = function(){
    $mdDialog.hide($scope.extinguidoresElegidos);
  }

  $scope.cargarExtinguidores = function(){
    return extinguidores.obtenerTodos().then(function(extinguidores){
        $scope.extinguidores = extinguidores;
    });
  }

  $timeout(function(){
    angular.element('#extinguidorBusqueda').on('keydown', function(event){
      event.stopPropagation();
    });
  }, 100)

});
