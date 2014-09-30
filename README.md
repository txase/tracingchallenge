# Function Tracing Challenge!!!

### Objective

Your mission, should you choose to accept, is to create a module that logs to stderr every time execution enters or leaves a function. To make things easy, bin/profile has been provided for running an app with the profiling module pre-required:

teapot.js:
```javascript
function tip() {
  pour();
}

function pour() {
  var cup;

  cup += 'tea';
}

tip();
```

Output:
```sh
$ bin/profile teapot.js
Entering tip
  Entering pour
  Leaving pour
Leaving tip
```

### Tasks

Should you choose to accept this mission:

1. Fork this repo
1. Write the module in index.js
1. Test the module by running npm test
1. Submit a PR! (Github will check whether your PR passes all the tests)
1. [Apply](http://newrelic.com/about/careers?jvi=oIFeZfwk,Job) for the job on the New Relic Node.js agent team!

Oh, and no peeking at other PRs :).
