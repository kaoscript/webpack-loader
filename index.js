/**
 * index.js
 * Version 0.3.0
 * December 29th, 2016
 *
 * Copyright (c) 2016 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
var _ = require('kaoscript')();
var fs = require('./fs.js');
var util = require('loader-utils');

var Compiler = _.Compiler;
var defaultTarget = parseInt(/^v(\d+)\./.exec(process.version)[1]) >= 6 ? 'ecma-v6' : 'ecma-v5';

module.exports = function(source) {
	this.cacheable && this.cacheable();
	
	var filename = util.getRemainingRequest(this);
	var params = util.parseQuery(this.query);
	console.log(params)
	
	if(params.register) {
		var modules = params.register.split('+');
		for(var i = 0; i < modules.length; i++) {
			require(modules[i])(Compiler);
		}
	}
	
	var target = params.target || defaultTarget;
	
	if(fs.isFile(_.getBinaryPath(filename, target)) && fs.isFile(_.getHashPath(filename, target)) && _.isUpToDate(filename, target, source)) {
		this.callback(null, fs.readFile(_.getBinaryPath(filename, target)));
	}
	else {
		var compiler = new Compiler(filename, {
			register: false,
			target: target
		});
		
		compiler.compile(source);
		
		this.callback(null, compiler.toSource());
	}
};