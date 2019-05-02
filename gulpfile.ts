import { series, parallel } from 'gulp';

async function clean() {
  console.log('running clean task');
  return src().pipe(dest())
}

function js(cb) {
  console.log('running js task');
  cb();
}

function css(cb) {
  console.log('running css task');
  cb();
}

export { clean, js, css };
export default series(clean, parallel(js, css));
