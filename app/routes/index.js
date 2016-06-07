import Ember from 'ember';


const List = Ember.Object.extend({
     init() {
     let title = this.get('title');
     let description = this.get('description');
     let items= this.get('items');
     }
});

// let listItemOne = List.create({
//      "title": "grocery list",
//           "description": "my lists for groceries",
//           "items": [{
//                "title": "bellpeppers",
//                "description": "for nachos"
//           }, {
//                "title": "chicken",
//                "description": "for soup"
//           }]
// });
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

// let defaultLists = [];
// defaultLists.push(listItemOne);
export default Ember.Route.extend({
	model() {
          // console.log(defaultLists);
		return this.store.findAll('list');
		// return defaultLists;
	}, 

     actions: {
          deleteList: function(list) {
               debugger; 
               let lists = this.store.findAll('list');

               // lists.removeObject(list);
               let store = this.store;
               // store.findRecord('list', 1).then(function(list) {
               //      console.log('list in find record', list);
               //      store.unloadRecord(list);
               // });

               // list.destroyRecord();
               // this.store.findAll('list');
               debugger;
          }
     }
});
