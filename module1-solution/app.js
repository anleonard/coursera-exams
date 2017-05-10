(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope) {

    var $lista = [];

    $scope.printMessage = function () {

        var numElementi = 0;
        var $listaElementi = $scope.lista;

        //check valid listaElementi
        if($listaElementi !=null && $listaElementi.length>0){

          $scope.arrayElementi = [];
          //ist of elements
          var splitLista = $listaElementi.split(',');

          //consider only valid item
          angular.forEach(splitLista, function(value, key) {
            if(value.trim().length>0) $scope.arrayElementi.push(value);
          });

          numElementi = $scope.arrayElementi.length;
        }

        $scope.messageStyle ="red-font";
        $scope.inputStyle = "valid-error";
        if(numElementi==0) $scope.messaggio = "Please enter data first";
        else{
          $scope.messageStyle ="green-font";
          $scope.inputStyle = "valid-success";
          if(numElementi<=3) $scope.messaggio = "Enjoy!";
          else $scope.messaggio = "TooMuch!";
        }
    };
  }

})();
