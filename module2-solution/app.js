(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  showList.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listBuy = this;

  listBuy.items = ShoppingListCheckOffService.getboughtList();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name: "chips",quantity: 4},
              {name: "water",quantity: 3},
              {name: "milk",quantity: 1},
              {name: "bread",quantity: 6},
              {name: "cookies",quantity: 5}];

  var boughtList = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.removeItem = function (itemIdex) {
    toBuyItems.splice(itemIdex, 1);
  };

  service.boughtItem = function (itemIndex) {
    var itemBought = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtList.push(itemBought);
  };

  service.getItems = function () {
    return toBuyItems;
  };

  service.getboughtList = function () {
    return boughtList;
  };
}

})();
