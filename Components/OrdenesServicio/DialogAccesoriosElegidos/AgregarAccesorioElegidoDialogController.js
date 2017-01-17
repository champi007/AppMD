myApp.controller('AgregarAccesorioElegidoDialogCtrl', function($scope, accesorios, locals, $mdDialog, $timeout){
  function limpiarForm(form){
    form.$setPristine();
    form.$setUntouched();
  }

  function editandoAccesorio(indexAccesorio){
    if($scope.accesorioEditado == $scope.accesoriosElegidos[indexAccesorio])
      return true;

      return false;
  }

  function buscarAccesorioYaAgregado() {
    var buscarEnAccesoriosElegidos = function(accesorio){
      return $scope.accesorioElegidoModel.accesorioObject._id === accesorio.accesorioObject._id &&
             $scope.accesorioElegidoModel.costo === accesorio.costo;
    };

    return $scope.accesoriosElegidos.find(buscarEnAccesoriosElegidos);
  }


  $scope.accesoriosElegidos = Object.keys(locals).length == 0 ? [] : locals.accesoriosElegidos
  $scope.accesorioElegidoModel = {};
  $scope.accesorioEditado = Object.keys(locals).length == 0 ? {} : locals.accesorioEditado;
  $scope.editandoAccesorio = Object.keys(locals).length == 0 ? false : true;

  $scope.cerrarDialog = function(){
      $mdDialog.cancel();
  }

  $scope.busqueda = '';

  $scope.agregarAccesorioElegidoAElegidos = function(accesorioForm){
    var accesorioYaAgregado = buscarAccesorioYaAgregado();
    if(angular.isUndefined(accesorioYaAgregado)){
      $scope.accesorioElegidoModel.accesorio = $scope.accesorioElegidoModel.accesorioObject._id;
      $scope.accesoriosElegidos.push($scope.accesorioElegidoModel);
      $scope.accesorioElegidoModel = {};
    }else{
      accesorioYaAgregado.cantidad += $scope.accesorioElegidoModel.cantidad;
      $scope.accesorioElegidoModel = {};
    }

    limpiarForm(accesorioForm);
  }

  $scope.editarAccesorio = function(accesorio){
    $scope.accesorioEditado = accesorio;
    $scope.editandoAccesorio = true;
  }

  $scope.terminarEdicion = function(){
    $scope.editandoAccesorio = false;
    $scope.accesorioEditado = {};
  }

  $scope.eliminarAccesorioDeElegidos = function(indexAccesorio){
    if(editandoAccesorio(indexAccesorio))
      $scope.terminarEdicion();

    $scope.accesoriosElegidos.splice(indexAccesorio, 1);

  }

  $scope.agregarAccesoriosElegidosAOrden = function(){
    $mdDialog.hide($scope.accesoriosElegidos);
  }

  $scope.cargarAccesorios = function(){
    return accesorios.obtenerTodos().then(function(accesorios){
        $scope.accesorios = accesorios;
    });
  }

  $timeout(function(){
    angular.element('#accesorioBusqueda').on('keydown', function(event){
      event.stopPropagation();
    });
  }, 100)

});
