Package.describe({
  summary: 'CSS minifier',
  version: '1.5.4'
});

Npm.depends({
  postcss: '8.2.10',
  cssnano: '4.1.10'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.mainModule('minifier.js', 'server');
  api.export('CssTools');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles([
    'minifier-tests.js',
    'urlrewriting-tests.js'
  ], 'server');
});
