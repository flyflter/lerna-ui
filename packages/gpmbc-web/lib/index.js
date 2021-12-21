'use strict';

// module.exports = gpmbcWeb;

// function gpmbcWeb() {
//   console.log('cesh899555')
//     // TODO
// }

import Btn from './button'

Btn.install = function (Vue) {
  Vue.component(Btn.name, Btn)
}

export {
  Btn
}


