import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('press');
  this.route('donations');
  this.route('donors');
  this.route('members');
  this.route('admin', function() {
    this.route('members');
    this.route('events');
  });
});

export default Router;
