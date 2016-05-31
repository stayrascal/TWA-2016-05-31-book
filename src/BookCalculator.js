function BookCalculator() {

}

BookCalculator.prototype.calculate = function (bookList) {
    var quantity = bookList.reduce((a, b) => {
        return a + b;
    });
    return quantity * 8;
};

module.exports = BookCalculator;