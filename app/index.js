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

PhonegapBackboneGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

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

  var prompts = [{
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: 'Y/n',
    warning: 'Yes: Enabling this will be totally awesome!'
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.someOption = (/y/i).test(props.someOption);

    cb();
  }.bind(this));
};

PhonegapBackboneGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.directory('www-source', 'app/www-source');

  phonegap.create({ path: 'app' });
};

// PhonegapBackboneGenerator.prototype.app = function app() {
  // this.mkdir('app/www-source');

  // this.copy('templates', 'templates');
  // this.copy('_bower.json', 'bower.json');
  // this.copy('_bower.json', 'bower.json');
// };

PhonegapBackboneGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};

PhonegapBackboneGenerator.prototype.readme = function readme() {
  // this.copy('README.md', 'README.md');
};
