import Ember from 'ember';

export default Ember.Component.extend({
	// this feels very angulary and is probably an antipattern
	store: Ember.inject.service(),
	// will need a detail view
	// showDetailModal: 'none',
	// actions: {
	// 	clickedList() {
	// 		this.set('showDetailModal', true);
	// 	},

	// 	closeDetailView() {
	// 		this.set('showDetailModal', 'none');
	// 	},

	// 	deleteListItem() {
	// 		//TODO: delete the item 
		
	// 	}
	// }
actions: {
	deleteList() {
		var store = this.get('store');
		console.log('store', store);
		console.log(this);
		console.log(this.list_id);


		this.sendAction('deleteList', this);
	}
}

});
