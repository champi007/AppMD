myApp.factory('clientes', function(_env, $resource){
    return {
      getInstance: getInstance
    }

    function getInstance(){
      var cliente = $resource(_env+'clientes/');
      addCRUDOperations(cliente);

      return cliente;
    }

    function addCRUDOperations(cliente){
      console.log(cliente);
    }
});
