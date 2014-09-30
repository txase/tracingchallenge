function one(cb) {
  cb();
}

one(function two() {
  1+2;
});
