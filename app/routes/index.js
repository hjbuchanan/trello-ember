import Ember from 'ember';

const listsDefaults = [{
          "title": "grocery list",
          "description": "my lists for groceries",
          "items": [{
          	"title": "bellpeppers",
          	"description": "for nachos"
          }, {
          	"title": "chicken",
          	"description": "for soup"
          }]
      }];
export default Ember.Route.extend({
	model() {
		// return this.store.findAll('list');
		return listsDefaults;
	}
});
