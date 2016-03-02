function EditParams() {
    var mSelf = this;
    
    UrlParams.apply( this, ["Edit"]);
    
    if(!mSelf.params.codigoLTJ) {
      mSelf.codigoLTJ = mSelf.params[0] || -1;
    } else {
      return mSelf.params;
    }
}