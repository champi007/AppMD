myApp.factory('ordenesServicio', function(_env, $resource, $q){

    var OrdenServicio = $resource(_env.urlApiDev+'/ordenesservicio/:id', {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });

    return {
      agregar: agregar,
      obtenerTodas: obtenerTodas,
      obtenerPorId: obtenerPorId
    }

    function agregar(ordenServicio){
      var deferred = $q.defer();
      var nuevaOrdenServicio = new OrdenServicio();
      angular.merge(nuevaOrdenServicio, ordenServicio);

      OrdenServicio.save(nuevaOrdenServicio, function(respuesta){
        deferred.resolve(respuesta);
      });

      return deferred.promise;
    }

    function obtenerTodas(){
      var deferred = $q.defer();
      var ordenesServicio = OrdenServicio.query(function(){
          deferred.resolve(ordenesServicio);
      });

      return deferred.promise;
    }

    function obtenerPorId(idOrdenServicio){
      var deferred = $q.defer();
      var ordenServicio =  OrdenServicio.get({id: idOrdenServicio}, function(){
        deferred.resolve(ordenServicio);
      });

      return deferred.promise;
    }

});
