const assert = require('assert')
const calc = require('../calculator.js')

  describe('Calculator should function correctly', function() {
    it('should add two numbers', function() {
      assert.equal(calc.add(1, 2), 3);
    });
    
    it('should subtract two numbers', function() {
      assert.equal(calc.subtract(3, 1), 2);
    });

    it('should multiply two numbers', function() {
      assert.equal(calc.multiply(3, 2), 6);
    });

    it('should add divide numbers together', function() {
      assert.equal(calc.divide(6, 2), 3);
    });

    it('should not error when dividing by 0', function() {
      assert.equal(calc.divide(6, 0), 0);
    });
  });