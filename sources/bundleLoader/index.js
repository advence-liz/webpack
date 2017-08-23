import React from 'react';
import ReactDOM from 'react-dom';
// The chunk is requested, when you require the bundle
var waitForChunk = require("bundle-loader?name=[name]!./file.js");

// To wait until the chunk is available (and get the exports)
//  you need to async wait for it.
waitForChunk(function(file) {
    // use file like it was required with
    // var file = require("./file.js");
    file.log();
});

var load = require("bundle-loader?name=[name]&lazy!./file.lazy.js");

// The chunk is not requested until you call the load function
load(function(file) {
file.log();
});