/**
* supplant() does variable substitution on the string. It scans through the string looking for 
* expressions enclosed in { } braces. If an expression is found, use it as a key on the object, 
* and if the key has a string value or number value, it is substituted for the bracket expression 
* and it repeats.
*
* Written by Douglas Crockford
* http://www.crockford.com/
*/
/**
 * Replace a placeholder with the value of an object
 * If the property is not found, keeps the placeholder
 * @param {string} o the property name to be found on the object
 * @returns string
 */
String.prototype.supplant = function (o) {
	return this.replace(
		/{([^{}]*)}/g, 
		function (a, b) {
			var r = o[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		}
	);
};