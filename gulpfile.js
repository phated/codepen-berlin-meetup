const { series, parallel, watch, src, dest, lastRun } = require('gulp');

function cleanAll(cb) {
  // some sort of parse
  console.log('running clean task');
  cb()
}
cleanAll.displayName = "clean:prod";
cleanAll.description = "Destroy your Filesystem";
cleanAll.flags = {
  "--env": "Use the force"
};

function jsProd(cb) {
  console.log('running js task');
  return src('*.json', { since: lastRun(jsProd) }).pipe(dest('./dist'))
}
jsProd.displayName = "js:prod"

function cssDev(cb) {
  console.log('running css task');
  cb()
}
cssDev.displayName = "css:dev";

function watcher() {
  watch('./*.json', series(cleanAll, jsProd));
}

module.exports = {
  cleanAll, jsProd, cssDev, watcher,
  default: series(cleanAll ,parallel(jsProd, cssDev))
};
