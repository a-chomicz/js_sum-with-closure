'use strict';

function makeRobotAccountant() {
  let counter = 0;

  return function(a) {
    return function(b) {
      counter += 1;

      const sum = a + b;

      if (counter <= 3) {
        return sum;
      }

      if (counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}
module.exports = makeRobotAccountant;
