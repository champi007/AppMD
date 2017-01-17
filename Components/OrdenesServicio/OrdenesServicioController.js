myApp.controller('OrdenesServicioCtrl', function($scope, vendedores, clientes, $mdDialog, $mdToast, ordenesServicio, reportes){

    function limpiarForm(form){
      form.$setUntouched();
      form.$setPristine();
    }

    $scope.agregarExtinguidorElegido = function(event){
      $mdDialog.show({
          controller: 'AgregarExtinguidorElegidoDialogCtrl',
          templateUrl: './Components/OrdenesServicio/DialogExtinguidoresElegidos/AgregarExtinguidorElegidoDialogViewTemplate.html',
          targetEvent: event,
          locals: {},
          clickOutsideToClose:true,
      })
      .then(function(extinguidoresElegidos) {
        angular.isUndefined($scope.ordenServicio.extinguidoresElegidos) ? $scope.ordenServicio.extinguidoresElegidos = extinguidoresElegidos
        : $scope.ordenServicio.extinguidoresElegidos = $scope.ordenServicio.extinguidoresElegidos.concat(extinguidoresElegidos);
        $mdToast.show($mdToast.simple()
          .textContent(extinguidoresElegidos.length == 1 ? 'El extinguidor se ha agregado a la orden de servicio'
          : 'Los extinguidores se han agregado a la orden de servicio')
          .position('bottom-left')
          .hideDelay(3000)
        );
      });
    };


    $scope.agregarAccesorioElegido = function(event){
      $mdDialog.show({
          controller: 'AgregarAccesorioElegidoDialogCtrl',
          templateUrl: './Components/OrdenesServicio/DialogAccesoriosElegidos/AgregarAccesorioElegidoDialogViewTemplate.html',
          targetEvent: event,
          locals: {},
          clickOutsideToClose:true,
      })
      .then(function(accesoriosElegidos) {
        angular.isUndefined($scope.ordenServicio.accesoriosElegidos) ? $scope.ordenServicio.accesoriosElegidos = accesoriosElegidos
        : $scope.ordenServicio.accesoriosElegidos = $scope.ordenServicio.accesoriosElegidos.concat(accesoriosElegidos);
        $mdToast.show($mdToast.simple()
          .textContent(accesoriosElegidos.length == 1 ? 'El accesorio se ha agregado a la orden de servicio'
          : 'Los accesorios se han agregado a la orden de servicio')
          .position('bottom-left')
          .hideDelay(3000)
        );
      });
    };

    $scope.editarExtinguidorElegido = function(event, extinguidor){
      $mdDialog.show({
          controller: 'AgregarExtinguidorElegidoDialogCtrl',
          templateUrl: './Components/OrdenesServicio/DialogExtinguidoresElegidos/AgregarExtinguidorElegidoDialogViewTemplate.html',
          targetEvent: event,
          locals: {extinguidorEditado: extinguidor, extinguidoresElegidos: $scope.ordenServicio.extinguidoresElegidos},
          clickOutsideToClose:true,
      })
      .then(function(extinguidoresElegidos) {
        $scope.ordenServicio.extinguidoresElegidos = extinguidoresElegidos;
        $mdToast.show($mdToast.simple()
          .textContent(extinguidoresElegidos.length == 1 ? 'El extinguidor se ha agregado a la orden de servicio'
          : 'Los extinguidores se han agregado a la orden de servicio')
          .position('bottom-left')
          .hideDelay(3000)
        );
      });
    };

    $scope.eliminarExtinguidor = function(indexExtinguidor){
      $scope.extinguidoresElegidos.splice(indexExtinguidor, 1);
    };

    $scope.registrarOrdenServicio = function(ordenServicioForm){
      ordenesServicio.agregar($scope.ordenServicio).then(function(){
        $scope.ordenServicio = {};
        limpiarForm(ordenServicioForm);
        $mdToast.show($mdToast.simple()
          .textContent('La orden de servicio se ha guardado correctamente')
          .position('bottom-left')
          .hideDelay(3000)
        ).then(function(){
        });
      });
    };

    $scope.limpiarOrdenServicio = function(ordenServicioForm){
      $scope.ordenServicio = {};
      limpiarForm(ordenServicioForm);
    }


    $scope.cargarClientes = function(){
      clientes.obtenerTodos().then(function(clientes){
        $scope.clientes = clientes;
      });
    };

    $scope.cargarVendedores = function(){
      vendedores.obtenerTodos().then(function(vendedores){
        $scope.vendedores = vendedores;
      });
    };

    $scope.ordenServicio = {};

});
