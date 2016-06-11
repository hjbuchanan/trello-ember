import Ember from 'ember';

export default Ember.Component.extend({
	// will need a detail view
	showDetailModal: 'none',
	showConfirmDelete: 'none',
	actions: {
		clickedList() {
			this.set('showDetailModal', true);
		},

		closeDetailView() {
			this.set('showDetailModal', 'none');
		},

		// TODO: need to confirm the delete
		deleteListItem(item, list) {
			this.sendAction('deleteListItem', item, list);
		},

		confirmDelete() {
			this.set('showDetailModal', 'none');
			this.set('showConfirmDelete', true);
		},

		closeDeleteModal() {
			this.set('showConfirmDelete', 'none');
			// this.set('showDetailModal', 'none');
		}
	}

});
