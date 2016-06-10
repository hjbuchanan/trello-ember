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
               console.log(newContorllerModel);
               // lists.removeObject(list);

               // store.findRecord('list', 1).then(function(list) {
               //      console.log('list in find record', list);
               //      store.unloadRecord(list);
               // });

               // list.destroyRecord();
               // this.store.findAll('list');
          },
          addList: function(title, description) {
               // take title
               debugger;
               // let this.store.createRecord('list', list);
               let controllerModel = this.controller.get('model');
               let newList = List.create({title, description, items: []});
               controllerModel.pushObject(newList);
               let newContorllerModel = this.controller.get('model');
               console.log(newContorllerModel);
          },

          // TODO: right now you can add an item but you don't know which list its associated with 
          addItem: function(title, description, list) {
            console.log(list);
            // TODO: this doesn't work. updates the list you passed but not the model.
            list.items.push({title, description});
            debugger;
            list.propertyDidChange('items');
          }
     }
});
