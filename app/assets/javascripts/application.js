// This loads a regular "script" file, like most projects would have already
// in their application file one way or another (maybe more with require_tree)
//= require non-es6/script

// Loads an ES module that just contains code, without using `import` or `export`
//= require es6/logging-module

// Loads an ES module that contains an `export` and `import.meta`
// Sprockets will concatenate it fine, but browsers will only load properly
// if served with `type="module"`
//= require es6/exporting-module
