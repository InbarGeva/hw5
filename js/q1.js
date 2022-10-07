console.log("Question 1");

class square {
    constructor(length) {
        this.side = length;
    }
    perimeter () {
        this.preim = 4*this.side;
        return this.preim;
    }
    area () {
        this.are = this.side**2;
        return  this.are;
    }
    diagonal () {
        this.diago = Math.sqrt(2*(this.side**2));
        return this.diago;
    }
    describe () {
        this.message = `square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()} `
        return this.message;
    }
}

const square1 = new square(5)
console.log (square1.describe());

const square2 = new square(10)
console.log (square2.describe());

const square3 = new square(2)
console.log (square3.describe());