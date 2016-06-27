/* eslint-disable */
Package.describe({
  name: 'pushplaybang:backshadow',
  version: '0.0.4',
  summary: 'full screen cover up UI component for blaze',
  git: 'https://github.com/Pushplaybang/backshadow',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('blaze-html-templates');
  api.use('es5-shim');
  api.use('ecmascript');
  api.use('pushplaybang:common-polyfills@0.0.1');
  api.use('pushplaybang:ballyhoo@0.0.1');
  api.use('pushplaybang:callback-stack@0.0.1');
  api.addFiles('backshadow.js', 'client');
  api.addFiles('backshadow.html', 'client');
  api.addFiles('helpers.js', 'client');
  api.export('BackShadow', 'client');
});

