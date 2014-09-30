var exec = require('child_process').exec;
var path = require('path');
var test = require('tape');

var profiler = path.join(__dirname, '..', 'bin', 'profile');

var tests = {
  'simple.js': 'Entering simple\nLeaving simple\n',
  'expression.js': 'Entering expression\nLeaving expression\n',
  'anonymous.js': 'Entering (anonymous)\nLeaving (anonymous)\n',
  'nested.js': 'Entering one\n  Entering two\n    Entering three\n    Leaving three\n  Leaving two\nLeaving one\n',
  'ifelse.js': 'Entering ifelse\nLeaving ifelse\nEntering ifelse\nLeaving ifelse\nEntering ifelse\nLeaving ifelse\nEntering ifelse\nLeaving ifelse\n',
  'returnEarly.js': 'Entering returnEarly\nLeaving returnEarly\n',
  'callback.js': 'Entering one\n  Entering two\n  Leaving two\nLeaving one\n',
  'throw.js': 'Entering thrws\nLeaving thrws\n',
}

Object.keys(tests).forEach(function(name) {
  test(name, function(t) {
    exec(profiler + ' ' + path.join(__dirname, name), function(err, stdout, stderr) {
      t.error(err, 'should not error out');

      if (err) return t.end();

      t.equal(stdout, '', 'should not output anything to stdout');
      t.equal(stderr, tests[name], 'should output trace to stderr');

      t.end();
    });
  });
});
