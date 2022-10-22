/**
 * Represent an FCV (Ficha de Controle Veicular) Object
 * @param {object} p The properties to create the object
 */
function FcvModel(p) {
  "use strict";
  var mSelf = this,
    o = valueOrDefault(p, {});

  // inherit instance properties
  ModelBase.call(mSelf, o);

  // using an IIFE (Immediately Invoked Function Expression)
  // to build the description property
  // only when creating the object
  /**
   * Check if the properties exists
   * If true appends to the description
   */
  const description = (function () {
    var builder = [];

    // properties that aren't required
    mSelf.Line && builder.push(mSelf.Line);
    mSelf.Table && builder.push(mSelf.Table);
    mSelf.Journey && builder.push(mSelf.Journey);

    return builder.join(" / ") + " — " + mSelf.Name;
  })();

  Object.defineProperty(mSelf, "Description", {
    get: () => description,
  });
}
