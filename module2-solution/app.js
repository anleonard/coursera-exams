(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOff', ShoppingListCheckOff);

ToBuyController.$inject = ['ShoppingListCheckOff'];
function ToBuyController(ShoppingListCheckOff) {
  var itemAdder = this;
  itemAdder.items = ShoppingListCheckOff.getItems();
  itemAdder.addItem = function (itemName, itemQuantity) {
    ShoppingListCheckOff.addItem(itemName, itemQuantity);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
function AlreadyBoughtController(ShoppingListCheckOff) {
  var boughtManager = this;
  boughtManager.boughtItems = ShoppingListCheckOff.getBoughtItems();
}

function ShoppingListCheckOff() {
  var service = this;
  var boughtItems = [];

  // List of shopping items
  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  }
}

})();
