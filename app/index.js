'use strict';

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
  this.mkdir('app');
  this.directory('www-source', 'app/www-source');
  this.copy('_package.json', 'package.json');
  this.copy('README.md', 'README.md');

  phonegap.create({ path: 'app' });
};
