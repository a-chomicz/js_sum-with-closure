'use strict';

/**
 * return a function that adds two numbers. after the 3rd successful
 * addition any even-numbered call thereafter (4th, 6th, etc.) returns
 * an error message instead.
 *
 * The closure keeps a single counter for the whole accountant instance.
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0; // shared across all calls produced by this accountant

  return function add(a) {
    return function add2(b) {
      // increment on every final invocation
      counter += 1;

      // first three calls always work
      if (counter <= 3) {
        return a + b;
      }

      // starting with the fourth call, only odd calls succeed
      if (counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}
module.exports = makeRobotAccountant;
