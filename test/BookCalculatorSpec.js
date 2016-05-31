var assert = require('chai').assert;
describe('Calculate optional book cost', function(){

    var BookCalculator = require('../src/BookCalculator.js');
    var calculator = new BookCalculator();

    describe('Just one book', function(){
        it('Should return 8 when just buy one book', function(){
            var bookList = [1,0,0,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 8.0);
        });
    });

    describe('Two books', function(){
        it('Should return 16 when buy two same books', function(){
            var bookList = [2,0,0,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 16.0);
        });

        it('Should return 15.2 when buy two different books', function(){
            var bookList = [1,1,0,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 15.2);
        });
    });

    describe('Three books', function(){
        it('Should return 21.6 when buy three different books', function(){
            var bookList = [1,1,1,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 21.6);
        });

        it('Should return 23.2 when buy two same books and another book', function(){
            var bookList = [2,1,0,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 23.2);
        });
    });

    describe('Four books', function(){
        it('Should return 25.6 when buy four different books', function(){
            var bookList = [1,1,1,1,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 25.6);
        });

        it('Should return 29.6 when buy two different books and another two same books', function(){
            var bookList = [2,1,1,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 29.6);
        });
    });

    describe('Five books', function(){
        it('Should return 30 when buy five different books', function(){
            var bookList = [1,1,1,1,1];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 30);
        });

        it('Should return 33.6 when buy three different books and another two same books', function(){
            var bookList = [2,1,1,1,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 33.6);
        });

        it('Should return 36.8 when buy three different books and two kinds of book have one', function(){
            var bookList = [2,2,1,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 36.8);
        });

        it('Should return 36.8 when buy two different books and one is 3 and another is 2', function(){
            var bookList = [3,2,0,0,0];
            var actualCost = calculator.calculate(bookList);
            assert.equal(actualCost, 38.4);
        });
    });

    //describe('eight books', function(){
    //    it('Should return 51.2 when buy five different books and the number is 22211', function(){
    //        var bookList = [2,2,2,1,1];
    //        var actualCost = calculator.calculate(bookList);
    //        assert.equal(actualCost, 51.2);
    //    });
    //})






});