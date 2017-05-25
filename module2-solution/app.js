(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOff', ShoppingListCheckOff);

//ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOff'];
function ToBuyController(ShoppingListCheckOff) {
  var itemAdder = this;
  itemAdder.items = ShoppingListCheckOff.getItems();
  itemAdder.addItem = function (itemName, itemQuantity, itemIndex) {
    ShoppingListCheckOff.addItem(itemName, itemQuantity);
    ShoppingListCheckOff.removeToBuy(itemIndex);
  }
}

//AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
function AlreadyBoughtController(ShoppingListCheckOff) {
  var boughtManager = this;
  boughtManager.boughtItems = ShoppingListCheckOff.getBoughtItems();
}

//ShoppingListCheckOff service
function ShoppingListCheckOff() {
  var service = this;
  var boughtItems = [];

  var items = [
    { name: "Candies", quantity: "78" },
    { name: "Biscuits", quantity: "20" },
    { name: "Cookies", quantity: "32" },
    { name: "Chocolate", quantity: "5" },
    { name: "Peppermints", quantity: "8" }
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

  service.getItemsSize = function () {
    return items.size();
  }

  service.removeToBuy = function (itemIndex) {
      items.splice(itemIndex, 1);
  }

}

})();
