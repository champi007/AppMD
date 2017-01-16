myApp
      .controller('ReportesCtrl', function($scope){
  

    
    $scope.tabMeses = [
      {title: 'Enero', contenido: []},
      {title: 'Febrero', contenido: []},
      {title: 'Marzo', contenido: []},
      {title: 'Abril',contenido:[]},
      {title: 'Mayo', contenido: []},
      {title: 'Junio', contenido: []},
      {title: 'Julio', contenido: []},
      {title: 'Agosto',contenido:[]},
      {title: 'Septiembre', contenido: []},
      {title: 'Octubre', contenido: []},
      {title: 'Noviembre', contenido: []},
      {title: 'Diciembre',contenido:[]}
 ];
 $scope.tabMeses2=[];
      $scope.reporteOrdenesServicio = {
        enero : {
          ordenesServicio: [{cliente: 'Diego'},{cliente: 'Alan'},{cliente: 'Jaime'},{cliente: 'Alan'},{cliente: 'Jaime'}]
        },
        febrero: {
          ordenesServicio: [{},{},{}]
        },
        marzo: {
          ordenesServicio: [{},{},{}]
        },
         abril : {
          ordenesServicio: [{},{},{}]
        },
        mayo: {
          ordenesServicio: [{},{},{}]
        },
        junio: {
          ordenesServicio: [{},{},{}]
        },
          julio : {
          ordenesServicio: [{cliente: 'Diego'},{cliente: 'Alan'},{cliente: 'Jaime'}]
        },
        agosto: {
          ordenesServicio: [{},{},{}]
        },
        septiembre: {
          ordenesServicio: [{},{},{}]
        },
         octubre : {
          ordenesServicio: [{},{},{}]
        },
        noviembre: {
          ordenesServicio: [{},{},{}]
        },
        diciembre: {
          ordenesServicio: [{},{},{}]
        }
    }
  
   $scope.obtenerOrdenesServicio = function(mes){
      return $scope.reporteOrdenesServicio[mes.toLowerCase()].ordenesServicio;
    }

    $scope.tabMeses.forEach(function(tabMeses){

        tabMeses.contenido = $scope.obtenerOrdenesServicio(tabMeses.title);
    })
 
 
    


  });



