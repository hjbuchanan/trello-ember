import Ember from 'ember';

export default Ember.Component.extend({
	// will need a detail view
	showDetailModal: 'none',
	actions: {
		clickedList() {
			this.set('showDetailModal', true);
		},

		closeDetailView() {
			this.set('showDetailModal', 'none');
		},

		deleteListItem(item, list) {
			this.sendAction('deleteListItem', item, list);
		}
	}

});
