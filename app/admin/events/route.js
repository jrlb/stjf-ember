import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },
  actions: {
    delete(event) {
      event.deleteRecord();
      event.save();
      this.refresh();
    }
  }
});
