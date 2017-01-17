myApp.controller('ReportesCtrl', function($scope, reportes){
  $scope.tabsMeses = [
          { mes: 'Enero', "anio": "2017", reporte:[]},
          { mes: 'Febrero', "anio": "2017", reporte: []},
          { mes: 'Marzo', "anio": "2017", reporte: []},
          { mes: 'Abril', "anio": "2017", reporte: []},
          { mes: 'Mayo', "anio": "2017", reporte: []},
          { mes: 'Junio', "anio": "2017", reporte: []},
          { mes: 'Julio', "anio": "2017", reporte: []},
          { mes: 'Agosto', "anio": "2017", reporte: []},
          { mes: 'Septiembre', "anio": "2017", reporte: []},
          { mes: 'Octubre', "anio": "2017", reporte: []},
          { mes: 'Noviembre', "anio": "2017", reporte: []},
          { mes: 'Diciembre', "anio": "2017", reporte: []}
  ];

  $scope.cargarReportes = function(tab){
    if(tab.reporte.length == 0)
      reportes.obtener(tab.mes, tab.anio).then(function(reporte){
        tab.reporte = reporte;
      });
  };

});
