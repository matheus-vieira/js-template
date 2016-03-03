function EditUrlParams() {
    var mSelf = this;
    
    UrlParams.apply(this, ["Edit"]);
    
    if(!mSelf.params.fcvId) {
      mSelf.fcvId = mSelf.params[0] || -1;
    } else {
      return mSelf.params;
    }
}