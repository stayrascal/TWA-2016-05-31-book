var assert = require('chai').assert;
describe('Calculate optional book cost', function(){

    var BookCalculator = require('../src/BookCalculator.js');
    var calculator = new BookCalculator();

    it('Should return 8 when just buy one book', function(){
        var bookList = [1,0,0,0,0];
        var actualCost = calculator.calculate(bookList);
        assert.equal(actualCost, 8);
    });

    it('Should return 16 when buy two same books', function(){
        var bookList = [2,0,0,0,0];
        var actualCost = calculator.calculate(bookList);
        assert.equal(actualCost, 16);
    });



});