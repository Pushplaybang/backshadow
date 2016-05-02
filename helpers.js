Template.backShadow.onCreated(function() {
  var instance = this;
  BackShadow.events.on(instance.data.id+'/open', function() {
    BackShadow.show(instance.data.id);
  });

  BackShadow.events.on(instance.data.id+'/close', function() {
    BackShadow.hide(instance.data.id);
  });

});

Template.backShadow.onRendered(function() {
  var instance = this;
  var el = document.getElementById(this.data.id);

  el.addEventListener('click', function() {
    BackShadow.close(instance.data.id);
  }, false);
});

