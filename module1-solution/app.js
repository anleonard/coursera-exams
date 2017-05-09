(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope) {

    var $lista = [];

    $scope.printMessage = function () {

        var numElementi = 0;
        var $listaElementi = $scope.lista;

        if($listaElementi !=null && $listaElementi.length>0){

          $scope.arrayElementi = [];
          var splitLista = $listaElementi.split(',');

          angular.forEach(splitLista, function(value, key) {
            if(value.length>0) $scope.arrayElementi.push(value);
          });

          numElementi = $scope.arrayElementi.length;
        }

        $scope.messageStyle ="red-font";
        $scope.inputStyle = "valid-error";
        if(numElementi==0) $scope.messaggio = "Please enter data first";
        else{
          $scope.messageStyle ="green-font";
          $scope.inputStyle = "valid-success";
          if(numElementi<=3) $scope.messaggio = "Enjoy";
          else $scope.messaggio = "TooMuch!";
        }
    };
  }

})();
