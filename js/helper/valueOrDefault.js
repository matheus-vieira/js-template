/**
 * Check if an value has a value,
 * if not returns the default value
 * @param {any} value The value to be validate
 * @param {any} defaultValue The default value if the value is null
 * @returns any
 */
function valueOrDefault(value, defaultValue) {
  "use strict";
  return value || defaultValue;
}
