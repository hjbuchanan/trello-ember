import Ember from 'ember';

export default Ember.Component.extend({
	// TODO: need to make content edible the update
	showDetailModal: 'none',
	showConfirmDelete: 'none',
	actions: {
		clickedList() {
			this.set('showDetailModal', true);
		},

		closeDetailView(title, description, item, list) {
			this.set('showDetailModal', 'none');
			// this.sendAction('updateListItem', title, description, item, list);
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
