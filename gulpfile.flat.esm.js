import { series, parallel } from 'gulp';





async function css() {
  console.log('running css task');
}

export { clean, js, css };
export default series(clean, parallel(js, css));
