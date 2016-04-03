/* eslint-disable */
Package.describe({
  name: 'pushplaybang:backshadow',
  version: '0.0.1',
  summary: 'full screen cover up, useful for overlayed UI components',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('blaze-html-templates');
  api.use('es5-shim');
  api.use('ecmascript');
  api.use('pushplaybang:common-polyfills');
  api.use('pushplaybang:ballyhoo');
  api.use('pushplaybang:callback-stack');
  api.addFiles('backshadow.js', 'client');
  api.addFiles('backshadow.html', 'client');
  api.addFiles('helpers.js', 'client');
  api.export('BackShadow', 'client');
});

