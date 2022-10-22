/**
 * Test a property to match the filter, using a regex
 * @param {string} strFilter The string to filter the object
 * @param {string} propToFilter the object property to filter
 * @returns boolean
 */
function regexFilter(strFilter, propToFilter) {
  var regex;
  try {
    regex = new RegExp(strFilter, "gi");
    return regex.test(this[propToFilter]);
  } catch (e) {
    return false;
  }
}
