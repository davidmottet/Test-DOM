/**
 * @name Test
 * @author David MOTTET
 */
(function (window, document, undefined) {
    "use strict";

   /**
   * self
   * Object represent all function you can call outside
   */
   var self = {};

   /**
   * tests
   * Tab represent all test make for analyse page
   */
   var tests = [];

   #{tests}

   /**
   * initTest
   * @
   * play all test
   */
   self.initTest = function () {
    var body = document.querySelector('body');
     for (var test in tests) {
       if (tests.hasOwnProperty(test)) {
         self[test.toLowerCase()] = tests[test]();
         if (tests[test]()) {
          body.className += " " + test.toLowerCase();
         } else {
          body.className += " no-" + test.toLowerCase();
         }
       }
     }
   }

   /*--------------------------------------------------------------------------*/
   //<-- auto call on whne you call R4_test -->\\
   self.initTest();

   window.test = self;

})(window, window.document);
