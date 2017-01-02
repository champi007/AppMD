var env = {};

if(window){
  Object.assign(env, window._env);
}

var myApp = angular.module('appDESCO',['ui.router','ngMessages','ngAria','ngMaterial', 'ngResource'])
.constant('_env', env)
.config(['$stateProvider','$urlRouterProvider', '$resourceProvider',function($stateProvider,$urlRouterProvider, $resourceProvider){
  
$stateProvider
.state('main',{
    url:'/main',
    templateUrl:'Menu.html',
})
.state('main.cliente',{
    url: '/cliente',
    templateUrl: './js/User/AgregarClienteView.html',

})
.state('main.vendedores',{
    url: '/vendedores',
    templateUrl: './js/User/VendedoresView.html',
    })
.state('main.registrarOrdenS',{
    url: '/registrarOrdenS',
    templateUrl: './js/User/AgregarOrdenDeServicio.html',
    })
.state('main.registrarExtinguidores',{
    url: '/registrarExtinguidores',
    templateUrl: './js/User/AgregarExtinguidores.html',
     })
.state('main.registrarAccesorios',{
    url: '/registrarAccesorios',
    templateUrl: './js/User/AgregarAccesorios.html',
      })
.state('main.reportesMensuales',{
    url: '/reportesMensuales',
    templateUrl: './js/User/ReportesMensuales.html',
       })
.state('main.registrarVendedor',{
    url: '/registrarVendedor',
    templateUrl: './js/User/Vendedores.html',

});
$urlRouterProvider
        .otherwise('/main');

$resourceProvider.defaults.stripTrailingSlashes = false;

}]);
