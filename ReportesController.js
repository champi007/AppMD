(function () {
  'use strict';
  angular
      .module('appDESCO')
      .controller('ReportesCtrl', ReportesCtrl);

  function ReportesCtrl ($scope) {
    $scope.tabs2 = [
          { "title": 'Enero', "content":[ "Tabs will become paginated if there isn't enough room for them."]},
          { "title": 'Febrero', "content": ["You can swipe left and right on a mobile device to change tabs."]},
          { "title": 'Marzo', "content": ["You can bind the selected tab via the selected attribute on the md-tabs element."]},
          { "title": 'Abril', "content": ["If you set the selected tab binding to -1, it will leave no tab selected."]},
          { "title": 'Mayo', "content": ["If you remove a tab, it will try to select a new one."]},
          { "title": 'Junio', "content": ["There's an ink bar that follows the selected tab, you can turn it off if you want."]},
          { "title": 'Julio', "content": ["If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."]},
          { "title": 'Agosto', "content": ["If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"]},
          { "title": 'Septiembre', "content": ["If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."]},
          { "title": 'Octubre', "content": ["If you're still reading this, you should just go check out the API docs for tabs!"]}
        ],
      
        $scope.tabs=[];

   
$scope.tabs2.forEach(function(mes){


  $scope.tabs.push({mes:mes.title});





})

    
  selected = null,
        previous = null;
  
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    
  

  }
});