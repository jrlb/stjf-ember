import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('event', params.id);
  },
  actions: {
    update(event) {
      var model = this.controllerFor('admin.events.edit').get('model');
      model.set('title', event.title);
      model.set('startDate', event.startDate);
      console.log(event, model);
      model.save().then(() => {
        console.log('updated');
        this.refresh();
      }, (error) => {
        console.log(error);
      });
    }
  }
});
