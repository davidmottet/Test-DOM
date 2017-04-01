"use strict";

/**
* @name Test
* @author David MOTTET
*/

/**
* tests
* Tab represent all test make for analyse page
*/

((window, document, undefined) => {

  /**
  * self
  * Object represent all function you can call outside
  */
  const self = {};

  /**
  * initTest
  * @
  * play all test
  */

  Object.entries = typeof Object.entries === 'function' ? Object.entries : obj => Object.keys(obj).map(k => [k, obj[k]]);

  self.initTest = function () {
    const body = document.querySelector('body');
    Object.entries(tests).forEach(([_key, _value]) => {
      self[_key.toLowerCase()] = _value();
      if (_value()) {
        body.className += " " + _key.toLowerCase();
      } else {
        body.className += " no-" + _key.toLowerCase();
      }
    })
  }

  /*--------------------------------------------------------------------------*/
  //<-- auto call on whne you call R4_test -->\\
  self.initTest();

  window.test = self;

})(window, window.document);
