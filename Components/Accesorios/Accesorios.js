myApp.factory('accesorios', function(_env, $resource, $q){

    var Accesorio = $resource(_env.urlApiDev+'/accesorios/:id', {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });

    return {
      agregar: agregar,
      obtenerTodos: obtenerTodos,
      obtenerPorId: obtenerPorId
    }

    function agregar(accesorio){
      var deferred = $q.defer();
      var nuevoAccesorio = new Accesorio();
      angular.merge(nuevoAccesorio, accesorio);

      Accesorio.save(nuevoAccesorio, function(respuesta){
        deferred.resolve(respuesta);
      });

      return deferred.promise;
    }

    function obtenerTodos(){
      var deferred = $q.defer();
      var accesorios = Accesorio.query(function(){
          deferred.resolve(accesorios);
      });

      return deferred.promise;
    }

    function obtenerPorId(idAccesorio){
      var deferred = $q.defer();
      var accesorio =  Accesorio.get({id: idAccesorio}, function(){
        deferred.resolve(accesorio);
      });

      return deferred.promise;
    }


});
