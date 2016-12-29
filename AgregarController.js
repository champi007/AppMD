var myApp = angular.module('appDESCO',['ui.router','ngMessages','ngAria','ngMaterial'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

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

}])