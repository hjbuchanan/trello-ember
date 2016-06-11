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
			this.sendAction('addItemToList', title, description, list);
		},

		// need to pass this action in all the components html

		deleteListItem (item, list) {
			this.sendAction('deleteListItem', item, list);
		}
	}
});
