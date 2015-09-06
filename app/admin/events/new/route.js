import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newEvent(event) {
      var newEvent = this.store.createRecord('event', event);
      newEvent.save().then(() => {
        this.refresh();
      });
    }
  }
});
