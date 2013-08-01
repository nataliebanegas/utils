/*
 * Avoid 'console' errors in browsers that lack a console
 */

(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
 		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/*
 * Consol Log Handler
 * Turns console.log off by default (for production use)
 * You can explicitly enable or disable logging by calling enable() and disable() methods
 */
var logger = {
		originalLogFunction: undefined,
		
		enable: function() {
			//window.console.log = this.originalLogFunction;
		},
		disable: function() {
			//window.console.log = function(){};
		},
		init: function() {
			this.originalLogFunction = window.console.log;
			this.disable();	
		}
};
logger.init();