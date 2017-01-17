myApp.factory('extinguidores', function(_env, $resource, $q){

    var Extinguidor = $resource(_env.urlApiDev+'/extinguidores/:id', {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });

    return {
      agregar: agregar,
      obtenerTodos: obtenerTodos,
      obtenerPorId: obtenerPorId
    }

    function agregar(extinguidor){
      var deferred = $q.defer();
      var nuevoExtinguidor = new Extinguidor();
      angular.merge(nuevoExtinguidor, extinguidor);

      Extinguidor.save(nuevoExtinguidor, function(respuesta){
        deferred.resolve(respuesta);
      });

      return deferred.promise;
    }

    function obtenerTodos(){
      var deferred = $q.defer();
      var extinguidores = Extinguidor.query(function(){
          deferred.resolve(extinguidores);
      });

      return deferred.promise;
    }

    function obtenerPorId(idExtinguidor){
      var deferred = $q.defer();
      var extinguidor =  Extinguidor.get({id: idExtinguidor}, function(){
        deferred.resolve(extinguidor);
      });

      return deferred.promise;
    }


});
