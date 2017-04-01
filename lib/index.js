"use strict";

/**
* @name Test
* @author David MOTTET
*/

/**
* tests
* Tab represent all test make for analyse page
*/

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function (window, document, undefined) {

  /**
  * self
  * Object represent all function you can call outside
  */
  var self = {};

  /**
  * initTest
  * @
  * play all test
  */

  Object.entries = typeof Object.entries === 'function' ? Object.entries : function (obj) {
    return Object.keys(obj).map(function (k) {
      return [k, obj[k]];
    });
  };

  self.initTest = function () {
    var body = document.querySelector('body');
    Object.entries(tests).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _key = _ref2[0],
          _value = _ref2[1];

      self[_key.toLowerCase()] = _value();
      if (_value()) {
        body.className += " " + _key.toLowerCase();
      } else {
        body.className += " no-" + _key.toLowerCase();
      }
    });
  };

  /*--------------------------------------------------------------------------*/
  //<-- auto call on whne you call R4_test -->\\
  self.initTest();

  window.test = self;
})(window, window.document);