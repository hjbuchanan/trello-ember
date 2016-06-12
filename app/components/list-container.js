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

		// need to pass this action in all the components html

		deleteListItem (item, list) {
			this.sendAction('deleteListItem', item, list);
		},

		updateListItem(title, description, item, list) {
			this.sendAction('updateListItem', title, description, item, list);
		}
	}
});
