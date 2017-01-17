var env = {};

if(window){
  Object.assign(env, window._env);
}

var myApp = angular.module('appDESCO',['ui.router', 'ngMessages', 'ngAria', 'ngMaterial', 'ngResource', 'ngAnimate'])
  .constant('_env', env)
  .config(['$stateProvider','$urlRouterProvider', '$resourceProvider','$mdThemingProvider', '$mdIconProvider', function($stateProvider, $urlRouterProvider, $resourceProvider, $mdThemingProvider, $mdIconProvider){

    $mdIconProvider.iconSet('mdi', '../assets/css/icons/mdi.svg');

    $mdThemingProvider.theme('temaDESCO')
      .primaryPalette('blue',{
        'default': '800',
      })
      .accentPalette('red', {
        'default': '400'
      });

      $stateProvider
        .state('main', {
            url:'/main',
            templateUrl:'./Components/Main/MainViewTemplate.html',
            controller: function($scope, $mdColors, $mdToast){
              $scope.mdColors = $mdColors;
              $scope.mdToast = $mdToast;
              $scope.temaRojo = true;

              $scope.cambiarTema = function(){
                $scope.temaRojo = $scope.temaRojo == true ? false : true;
              }
            }
          })
          .state('main.clientes',{
            url: '/clientes',
            templateUrl: './Components/Clientes/ClientesViewTemplate.html',
            controller: 'ClientesCtrl'
          })
          .state('main.vendedores',{
            url: '/vendedores',
            templateUrl: './Components/Vendedores/VendedoresViewTemplate.html',
            controller: 'VendedoresCtrl'
          })
          .state('main.ordenesServicio',{
            url: '/ordenesservicio',
            templateUrl: './Components/OrdenesServicio/OrdenesServicioViewTemplate.html',
            controller: 'OrdenesServicioCtrl'
          })
          .state('main.extinguidores',{
            url:'/extinguidores',
            templateUrl: './Components/Extinguidores/ExtinguidoresViewTemplate.html',
            controller: 'ExtinguidoresCtrl'
          })
          .state('main.accesorios',{
            url: '/accesorios',
            templateUrl: './Components/Accesorios/AccesoriosViewTemplate.html',
            controller: 'AccesoriosCtrl'
          })
          .state('main.reportes',{
            url: '/reportes',
            templateUrl: './Components/Reportes/ReportesViewTemplate.html',
            controller: 'ReportesCtrl'
          });


          $urlRouterProvider.otherwise('/main');

          $resourceProvider.defaults.stripTrailingSlashes = false;

}]).run(function($templateRequest){
          $templateRequest('../assets/css/icons/mdi.svg');
});
