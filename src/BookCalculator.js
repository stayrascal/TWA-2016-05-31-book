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

        list = bookList.map(quantity => {
            if (quantity >= 1){
                quantity--;
            }
            return quantity;
        });

        bookTypes = this.getBookTypes(list);
    }
    sum += list.reduce((a, b) => a + b) * 8;
    return sum;
};

BookCalculator.prototype.getBookTypes = function(bookList){
    return bookList.filter(quantity => {return quantity >= 1}).length;
    //var number = 0;
    //bookList.forEach(quantity => {
    //    if (quantity >= 1){
    //        number++;
    //    }
    //});
    //return number;
};



module.exports = BookCalculator;