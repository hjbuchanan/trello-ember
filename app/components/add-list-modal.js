import Ember from 'ember';

export default Ember.Component.extend({
	showAddListModal: 'none',
	showCreateButton: true,
	actions: {
		showAddList () {
			this.set('showAddListModal', true);
			this.set('showCreateButton', 'none');
		},

		sendAddList(title, description) {
			this.sendAction('addList', title, description);
			this.set('showAddListModal', 'none');
			this.set('showCreateButton', true);
		}
	}
});
