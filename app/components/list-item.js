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

		deleteListItem() {
			//TODO: delete the item 
			console.log(this);

			let item = this.get('item');

		}
	}

});
