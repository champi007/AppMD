
myApp
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $state) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.state=$state;
    $scope.sidenav=$mdSidenav;
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

  });

