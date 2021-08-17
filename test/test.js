const assert = require('assert');
const findFunction = require('../find');

describe('Soup letter error tests', function() {
    it('should return Error when Soup param is not an Array', function() {
        assert.throws(function() { findFunction(1,1,{a: "b"}) }, Error, /Soup parameter must be an Array/);
    });
    it('should return Error when Rows param is not a valid number', function() {
        assert.throws(function() { findFunction("s",1,[]) }, Error, /Rows parameter must be a valid number/);
    });
    it('should return Error when Letters param is not a valid number', function() {
        assert.throws(function() { findFunction(1,"s",[]) }, Error, /Letters parameter must be a valid number/);
    });
    it('should return Error Soup parameter is not able to be empty', function() {
        assert.throws(function() { findFunction(1,1,[]) }, Error, /Soup parameter is not able to be empty/);
    });
    it('should return Error Soup parameter mismatch with rows', function() {
        assert.throws(function() { findFunction(5,2,[["A","B"]]) }, Error, /Soup parameter mismatch with rows/);
    });
    it('should return Error Soup parameter must be only of Arrays', function() {
        assert.throws(function() { findFunction(1,1,[{a:2}]) }, Error, /Soup parameter must be only of Arrays/);
    });
    it('should return Error Letters parameter mismatch with soup array', function() {
        assert.throws(function() { findFunction(1,80,[["A"]]) }, Error, /Letters parameter mismatch with soup array/);
    });
    it('should return Error Must only be letters in the soup!', function() {
        assert.throws(function() { findFunction(1,2,[["A", 2]]) }, Error, /Must only be letters in the soup!/);
    });
    it('should return Error Soup must have valid letters', function() {
        assert.throws(function() { findFunction(1,3,[["A", "-", "C"]]) }, Error, /Soup must have valid letters/);
    });
    it('should return Error Soup must have one letter per character', function() {
        assert.throws(function() { findFunction(1,4,[["A", "SS", "X", "L"]]) }, Error, /Soup must have one letter per character/);
    });

});

describe('Soup letter result tests', function() {
    it('should return 3  ', function() {
        assert.strictEqual(findFunction(3,3,[["O","I","E"],["I","i","E"],["E","I","E"]]), 3)
    });
    it('should return 4 ', function() {
        assert.strictEqual(findFunction(1,10,[["E","I","O","I","E","I","O","E","I","O"]]), 4)
    });
    it('should return 8 ', function() {
        assert.strictEqual(findFunction(5,5,[["E","A","E","A","E"],["A","I","I","I","A"],["E","I","O","I","E"],["A","I","I","I","A"],["E","A","E","A","E"]]), 8)
    });
    it('should return 3  ', function() {
        assert.strictEqual(findFunction(7,2,[["O","X"],["I","O"],["E","X"],["I","I"],["O","X"],["I","E"],["E","X"]]), 3)
    });
    it('should return 0 ', function() {
        assert.strictEqual(findFunction(1,1,[["E"]]), 0)
    });

});

