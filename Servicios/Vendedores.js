myApp.factory('vendedores', function(_env, $resource, $q){

    var Vendedor = $resource(_env.urlApiDev+'/vendedores/:id', {id: '@_id'}, {
      update:{
        method: 'PUT'
      }
    });

    return {
      agregar: agregar,
      obtenerTodos: obtenerTodos,
      obtenerPorId: obtenerPorId
    }

    function agregar(vendedor){
      var deferred = $q.defer();
      var nuevoVendedor = new Vendedor();
      angular.merge(nuevoVendedor, vendedor);

      Vendedor.save(nuevoVendedor, function(respuesta){
        deferred.resolve(respuesta);
      });

      return deferred.promise;
    }

    function obtenerTodos(){
      var deferred = $q.defer();
      var vendedores = Vendedor.query(function(){
          deferred.resolve(vendedores);
      });

      return deferred.promise;
    }

    function obtenerPorId(idVendedor){
      var deferred = $q.defer();
      var vendedor =  Vendedor.get({id: idVendedor}, function(){
        deferred.resolve(vendedor);
      });

      return deferred.promise;
    }


});
