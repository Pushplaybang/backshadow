import { Ballyhoo } from 'meteor/pushplaybang:ballyhoo';
import { CallbackStack } from 'meteor/pushplaybang:callback-stack';

BackShadow = {
  /* external modules */
  events: new Ballyhoo(),
  cbStack: new CallbackStack(),

  /* store a reference to the elements we interact with */
  el : '',
  wrap: '',

  /* show and hide the backshadow */
  show: function(id) {
    this.el = document.getElementById(id);
    this.wrap = document.querySelector('body');

    if (this.el.classList.contains('visible'))
      return null;

    this.el.classList.add('visible');
    this.wrap.classList.add('backshadow-visible-'+id);
  },

  hide: function(id) {
    this.el = document.getElementById(id);
    this.wrap = document.querySelector('body');

    if (!this.el.classList.contains('visible'))
      return null;

    this.el.classList.remove('visible');
    this.wrap.classList.remove('backshadow-visible-'+id);
  },

  /* open and close the backshadow element */
  open: function(id, data, callback, callbackStack) {
    BackShadow.events.emit(id+'/open', data || {});
    this.cbStack.store(callbackStack, id);

    if (callback && typeof(callback) === 'function') {
      requestAnimationFrame(callback);
    }
  },

  close: function(id, data, callback) {
    BackShadow.events.emit(id+'/close', data || {});
    this.cbStack.run(id);

    if (callback && typeof(callback) === 'function') {
      requestAnimationFrame(callback);
    }
  }
};
