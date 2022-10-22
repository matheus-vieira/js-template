/**
 * Url params for Edit FCV page
 * @returns UrlParams
 */
function EditUrlParams() {
  var mSelf = this;

  UrlParams.apply(this, ["Edit"]);

  if (!mSelf.params.fcvId) {
    mSelf.fcvId = mSelf.params[0] || -1;
  }

  return mSelf.params;
}
