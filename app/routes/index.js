import Ember from 'ember';


const List = Ember.Object.extend({
     init() {
     let title = this.get('title');
     let description = this.get('description');
     let items= this.get('items');
     }
});

let listItemOne = List.create({
     "title": "grocery list",
          "description": "my lists for groceries",
          "items": [{
               "title": "bellpeppers",
               "description": "for nachos"
          }, {
               "title": "chicken",
               "description": "for soup"
          }]
});
// const listsDefaults = [{
//           "title": "grocery list",
//           "description": "my lists for groceries",
//           "items": [{
//           	"title": "bellpeppers",
//           	"description": "for nachos"
//           }, {
//           	"title": "chicken",
//           	"description": "for soup"
//           }]
//       }, {
//           "title": "todo list",
//           "description": "my todossss",
//           "items": [{
//                "title": "clean",
//                "description": "for the party"
//           }, {
//                "title": "work out",
//                "description": "fitness"
//           }]
//       }];

let defaultLists = [];
defaultLists.push(listItemOne);
export default Ember.Route.extend({
	model() {
          // console.log(defaultLists);
		// return this.store.findAll('list');
		return defaultLists;
	}, 

     setUpController: function(controller, model) {
          this._super(controller, model);
     },

     actions: {
          deleteList: function(list) {
               // let model = this.modelFor(this.index);
               // let lists = this.store.findAll('list');
               let controllerModel = this.controller.get('model')

               controllerModel.pushObject(list);

               let newContorllerModel = this.controller.get('model');
               // lists.removeObject(list);

               // store.findRecord('list', 1).then(function(list) {
               //      console.log('list in find record', list);
               //      store.unloadRecord(list);
               // });

               // list.destroyRecord();
               // this.store.findAll('list');
          },
          addList: function(title, description) {
               let controllerModel = this.controller.get('model');
               let newList = List.create({title, description, items: []});
               controllerModel.pushObject(newList);
               let newContorllerModel = this.controller.get('model');
          },

          addItem: function(title, description, list) {
            list.items.push({title, description});
            list.propertyDidChange('items');
          },

          deleteItemFromList: function(item, list) {
            let title = item.title;
            let description = item.description;
            let itemsArray = list.items;

            for (let itemElem of itemsArray) {
              if (itemElem.title === title && itemElem.description) {
                //delete this element from an array
                let index = itemsArray.indexOf(itemElem);
                if (index > -1 ) {
                  itemsArray.splice(index, 1);
                }
              }
            }
            list.propertyDidChange('items');
          }
     }
});
