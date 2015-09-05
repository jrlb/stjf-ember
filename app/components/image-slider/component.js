import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$("#slider1").responsiveSlides({
      speed: 1000
    });
  },
  actions: {
  }
});
