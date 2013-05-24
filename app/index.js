'use strict';

var exec = require("child_process").exec;
var util = require('util');
var path = require('path');
var phonegap = require('phonegap');
var yeoman = require('yeoman-generator');

var PhonegapBackboneGenerator = module.exports = function PhonegapBackboneGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PhonegapBackboneGenerator, yeoman.generators.NamedBase);

PhonegapBackboneGenerator.prototype.app = function app() {
  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);

  this.destinationRoot('app/www-source');

  this.directory('www-source', '.');
  this.copy('_package.json', 'package.json');
  this.copy('README.md', 'README.md');

  this.write("../www/css/.keep", "");
  this.write("../www/img/.keep", "");
  this.write("../www/js/.keep", "");

  this.copy("www/index.html", "../www/index.html");

  phonegap.create({ path: '..' });

  exec("rm ../www/index.html");
  exec("rm ../www/js/index.js");
  exec("rm ../www/img/logo.png");
  exec("rm ../www/css/index.css");
};

