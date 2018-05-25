// This file provides necessary browser polyfills (ie Object.assign)
// that make the site work in IE 11.
//
// See: https://github.com/gatsbyjs/gatsby/issues/2177#issuecomment-382280801

import 'babel-polyfill'

exports.onClientEntry = () => {
  // Don't need to do anything here, but if you don't 
  // export something, the import won't work.
}
