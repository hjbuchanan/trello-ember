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

		addItemToList(title, description) {
			// should this go up to the route level?
			this.sendAction('addItemToList', title, description);
		}
	}
});
