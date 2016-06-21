(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    'rxjs': 'lib/rxjs',
    '@angular': 'lib/@angular',
    '@angular2-material': 'lib/@angular2-material',
    'ng2-material': 'lib/ng2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'}
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
    'ng2-material'
  ];

  var materialPackages = [
    'core',
    'input',
    'toolbar',
    'checkbox'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
  });

  materialPackages.forEach(function (pkgName) {
    packages[`@angular2-material/${pkgName}`] = {main: `${pkgName}.js`};
  });

  var config = {
    map: map,
    packages: packages
  };

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) {
    global.filterSystemConfig(config);
  }

  System.config(config);

})(this);