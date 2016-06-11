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
		}
	}
});
