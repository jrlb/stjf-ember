import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var event = {
        title: this.get('title'),
        startDate: this.get('date')
      };
      this.sendAction('action', event);
    }
  }
});
