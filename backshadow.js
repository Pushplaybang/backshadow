BackShadow = {
  events: new Ballyhoo(),
  cbStack: new CallbackStack(),

  el : '',

  show: function(id) {
    this.el = document.getElementById(id);
    if (this.el.classList.contains('visible'))
      return null;

    this.el.classList.add('visible');
  },
  hide: function(id) {
    this.el = document.getElementById(id);
    if (!this.el.classList.contains('visible'))
      return null;

    this.el.classList.remove('visible');
  },
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