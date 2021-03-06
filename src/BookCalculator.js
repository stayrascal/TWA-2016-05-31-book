function BookCalculator() {
    this.discountObj = {
        1:1,
        2:0.95,
        3:0.9,
        4:0.8,
        5:0.75
    }
}

BookCalculator.prototype.calculate = function (bookList) {
    var sum = 0.0;
    var list = Array.from(bookList);
    var bookTypes = this.getBookTypes(list);
    while (bookTypes > 1){
        sum += bookTypes * this.discountObj[bookTypes] * 8;
        list = this.next(list);
        bookTypes = this.getBookTypes(list);
    }
    sum += list.reduce((a, b) => a + b) * 8;
    return sum;
};

BookCalculator.prototype.next = function(list){
    return list.map(quantity => {
        if (quantity >= 1){
            quantity--;
        }
        return quantity;
    });
};

BookCalculator.prototype.getBookTypes = function(bookList){
    return bookList.filter(quantity => {return quantity >= 1}).length;
};



module.exports = BookCalculator;