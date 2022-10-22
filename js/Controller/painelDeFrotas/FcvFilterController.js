// This is a function only used on a specific page
// The idea here is to have a lightweight object
// And append functions/properties only when necessary
// This is the reason to append through prototype
// Instead of a function in the object itself
/**
 * Filter a fcv using a smart regex function
 */
FcvModel.prototype.filterBy = regexFilter;