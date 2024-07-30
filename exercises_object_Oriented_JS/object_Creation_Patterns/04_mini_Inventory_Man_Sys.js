/*
Mini Inventory Management System

In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an item manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

Component Specifications
Here's all the required information for an item:

SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.
The following are the methods that the item manager can perform:

create: This method creates a new item. Returns false if creation is not successful.
update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
items: This property contains a list of all the items.
inStock: This method lists all the items that have a quantity greater than 0.
itemsInCategory: This method lists all the items for a given category
The following are the methods on the reports managers:

init: This method accepts the ItemManager object as an argument and assigns it to the items property.
createReporter: This method accepts an SKU code as an argument and returns an object.
The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

*/

class Item {
  constructor(name, category, quantity) {
    if (this.#isValidName(name) && this.#isValidCategory(category) &&
        this.#isValidQuantity(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.sku = this.#generateSku();

      return this
    } else {
      return { notValid: true };
    }
  }

  #isValidName(name) {
    return name.replaceAll(' ', '').length >= 5;
  }

  #isValidCategory(category) {
    let checkForSpaces = category.indexOf(' ');
    if (checkForSpaces !== -1 || category.length <= 4) {
      return false
    }

    return true
  }

  #isValidQuantity(quantity) {
    return quantity !== undefined;
  }

  #generateSku() {
    let skuName = String(this.name.replaceAll(' ', '').slice(0, 3));
    let categoryName = String(this.category.slice(0, 2));
    return (skuName + categoryName).toUpperCase();
  }
}

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let newObj = new Item(name, category, quantity);

    if (newObj.notValid) return false;
    else this.items.push(newObj);
  },

  update(sku, updatesObj) {
    let idxToUpdate = this.getItemIndex(sku);
    this.items[idxToUpdate].quantity = updatesObj.quantity;
  },
  
  delete(sku) {
    let idxToDelete = this.getItemIndex(sku);
    this.items.splice(idxToDelete, 1);
  },

  inStock() {
    let result = this.items.filter(item => {
       return item.quantity > 0;
    });

    return result;
  },

  itemsInCategory(categoryName) {
    let result = this.items.filter(item => {
       return item.category === categoryName;
    });

    return result;
  },

  getItemIndex(sku) {
    for (let idx = 0; idx < this.items.length; idx++) {
      if (this.items[idx].sku === sku) return idx;
    }

    return -1
  },
}

let ReportManager = {
  // managedItem: here after init is invoked

  init(objectToInit) {
    ReportManager.managedItem = objectToInit;
  },

  reportInStock() {
    let reportStaging = this.managedItem.inStock();

    return reportStaging.reduce((arr, { name }) => {
      arr.push(name);
      return arr;
    }, []).join(', ');
  },

  createReporter(sku) {
    let itemIndex = this.managedItem.getItemIndex(sku);
    return {
      item: this.managedItem.items[itemIndex],

      itemInfo() {
        let result = [
          ("skuCode: " + this.item.sku),
          ("itemName: " + this.item.name),
          ("category: " + this.item.category),
          ("quantity: " + this.item.quantity)
        ];
        return result.join("\n");
      },
    }
  },

}


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
console.log(ReportManager.reportInStock());
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
console.log(ReportManager.reportInStock());
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
console.log(kitchenPotReporter.itemInfo());
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
console.log(ItemManager.items[1].name);
ItemManager.items[1].name = 'test'
console.log(ItemManager.items[1].name);