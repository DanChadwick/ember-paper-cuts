import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var application;

  let attributes = Ember.assign({}, config.APP, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
