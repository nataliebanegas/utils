/**
* Implements Object.create for browsers that don't support it
*/
if (!Object.create) {
	Object.create = (function(){
		function F(){}

		return function(o){
			if (arguments.length != 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	})()
}

/**
* Utility function
* Simplifies adding methods and properties to objects
*/
function extend(obj, props) {
	for (prop in props) {
		if (props.hasOwnProperty(prop)) {
			obj[prop] = props[prop];
		}
	}
}