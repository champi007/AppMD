myApp.factory('clientes', function(_env, $resource, $q){

    var Cliente = $resource(_env.urlApiDev+'/clientes/:id', {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });

    return {
      agregar: agregar,
      obtenerTodos: obtenerTodos,
      obtenerPorId: obtenerPorId
    }

    function agregar(cliente){
      var deferred = $q.defer();
      var nuevoCliente = new Cliente();
      angular.merge(nuevoCliente, cliente);

      Cliente.save(nuevoCliente, function(respuesta){
        deferred.resolve(respuesta);
      });

      return deferred.promise;
    }

    function obtenerTodos(){
      var deferred = $q.defer();
      var clientes = Cliente.query(function(){
          deferred.resolve(clientes);
      });

      return deferred.promise;
    }

    function obtenerPorId(idCliente){
      var deferred = $q.defer();
      var cliente =  Cliente.get({id: idCliente}, function(){
        deferred.resolve(cliente);
      });

      return deferred.promise;
    }


});
