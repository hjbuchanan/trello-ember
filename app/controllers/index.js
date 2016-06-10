import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addItemToList (title, description, list) {
			this.send('addItem', title, description, list);
			return true;
		} 
	}
});
