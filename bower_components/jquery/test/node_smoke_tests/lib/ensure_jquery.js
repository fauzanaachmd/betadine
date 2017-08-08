"use strict";

var assert = require( "assert" );

// Check if the object we got is the jquery object by invoking a basic API.
module.exports = function ensureJQuery( jQuery ) {
	assert( /^jQuery/.test( jQuery.expando ),
		"jQuery.expando was not detected, the jquery bootstrap process has failed" );
};
