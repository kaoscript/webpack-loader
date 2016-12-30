/**
 * index.js
 * Version 0.1.0
 * December 29th, 2016
 *
 * Copyright (c) 2016 Baptiste Augrain
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
const {Compiler, extensions, isUpToDate} = require('kaoscript')();
const fs = require('./fs.js');
const util = require('loader-utils');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	
	const filename = util.getRemainingRequest(this);
	
	if(fs.isFile(fs.hidden(filename, extensions.binary)) && fs.isFile(fs.hidden(filename, extensions.hash)) && isUpToDate(filename, source)) {
		this.callback(null, fs.readFile(fs.hidden(filename, extensions.binary)));
	}
	else {
		const compiler = new Compiler(filename);
		
		compiler.compile(source);
		
		this.callback(null, compiler.toSource());
	}
};