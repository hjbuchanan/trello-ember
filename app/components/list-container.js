import Ember from 'ember';

export default Ember.Component.extend({
	// this feels very angulary and is probably an antipattern
	store: Ember.inject.service(),
	actions: {
		deleteList(list) {
			this.sendAction('deleteList', list);
		},

		addItemToList (title, description, list) {
			this.sendAction('addItemToList', title, description, list);
		},

		deleteListItem (item, list) {
			this.sendAction('deleteListItem', item, list);
		},

		// implemented but didn't end up using
		updateListItem(title, description, item, list) {
			this.sendAction('updateListItem', title, description, item, list);
		}
	}
});
