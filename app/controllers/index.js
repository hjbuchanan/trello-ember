import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addItemToList (title, description, list) {
			this.send('addItem', title, description, list);
			return true;
		},

		deleteListItem (item, list) {
			this.send('deleteItemFromList', item, list);
		},

		deleteList(list) {
			this.send('deleteListModel', list);
		},

		addList(title, description) {
			this.send('addListToModel', title, description);
		},

		// implemented but didn't end up using
		updateListItem(title, description, item, list) {
			this.send('updateItem', title, description, item, list);
		}
	}
});
