
myApp
    .controller('ExtinguidorCtrl', function($scope) {
      $scope.extinguidores2 = [
       
       {
    "_id": "5865c23cab92dbf4b3fe12de",
    "descripcion": "Extinguidor CO2",
    "capacidades": [
      "2.3 kgs",
      "4.5 kgs",
      "6 kgs",
      "9 kgs"
    ]
  },
  {
    "_id": "5865c266ab92dbf4b3fe12df",
    "descripcion": "Extinguidor de Agua",
    "capacidades": [
      "9.6 lts"
    ]
  },
  {
    "_id": "5865c288ab92dbf4b3fe12e0",
    "descripcion": "Extinguidor Clase K",
    "capacidades": [
      "9.46 lts"
    ]
  },
  {
    "_id": "5865c2beab92dbf4b3fe12e1",
    "descripcion": "Extinguidor PQS",
    "capacidades": [
      "1 kg",
      "2 kgs",
      "4.5 kgs",
      "6 kgs",
      "9 kgs"
    ]
  },
  {
    "_id": "5865c2e3ab92dbf4b3fe12e2",
    "descripcion": "Unidad Móvil",
    "capacidades": [
      "35 kgs",
      "50 kgs",
      "75 kgs"
    ]
  }
      ];
      
$scope.extinguidores=[];


$scope.extinguidores2.forEach(function(extinguidor){
extinguidor.capacidades.forEach(function (capacidad){

  $scope.extinguidores.push({extinguidor:extinguidor.descripcion+' '+capacidad});
})




})

function ExtinguidorCtrl($scope,extintores) {
      $scope.guardarExtintor= function guardarExtintor()
      {
            var extintor={nombre:$scope.nombreExtintor }; console.log(extintor);
            extintores.agregar(extintor).then(function(respuesta){
                console.log(respuesta);
            })
      }
   
};
 $scope.unidades = [
          "KILOS",
          "LIBRAS",
          "LITROS",
      
      ];


       });
