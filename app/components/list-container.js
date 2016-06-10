import Ember from 'ember';

export default Ember.Component.extend({
	// this feels very angulary and is probably an antipattern
	store: Ember.inject.service(),
	actions: {
		deleteList() {
			var store = this.get('store');



			this.sendAction('deleteList', this);
		},

		addItemToList (title, description, list) {
			console.log('container');
			this.sendAction('addItemToList', title, description, list);
		}
	}
});
