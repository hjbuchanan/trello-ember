import Ember from 'ember';

export default Ember.Component.extend({
	showDetailModal: 'none',
	actions: {
		showAddItem() {
			this.set('showDetailModal', true);
		},

		closeDetailView() {
			this.set('showDetailModal', 'none');
		},

		addItemToList(title, description, list) {
			console.log(list);
			this.sendAction('addItemToList', title, description, list);
		}
	}
});
