import Ember from 'ember';


const defaultList = [{
	title: 'grocery list',
	description: 'my lists for groceries'
}, {
	title: 'todo',
	description: 'my todos for today'
}];
export default Ember.Route.extend({
	model() {
		// return this.store.findAll('list');
		return defaultList;
	}
});
