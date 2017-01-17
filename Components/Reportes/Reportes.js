myApp.factory('reportes', function(_env, $resource, $q){

  var Reporte = $resource(_env.urlApiDev+'/ordenesservicio/reportes', {mes: '@mes', anio: '@anio'});

  return{
    obtener: obtener
  }

   function obtener(mes, anio){
    var deferred = $q.defer();

    var reporte = Reporte.query({mes: mes, anio: anio}, function(){
        deferred.resolve(reporte);
    });

    return deferred.promise;

  };

});
