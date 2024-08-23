//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getArea(){
		return this.width*this.height
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side,side)
    }
	
	getPerimeter(){
		return 4*this.width
	}
}
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle width: ${rectangle.width}`); // Output: Rectangle width: 5
console.log(`Rectangle height: ${rectangle.height}`); // Output: Rectangle height: 10
console.log(`Rectangle area: ${rectangle.getArea()}`); // Output: Rectangle area: 50

const square = new Square(4);
console.log(`Square width: ${square.width}`); // Output: Square width: 4
console.log(`Square height: ${square.height}`); // Output: Square height: 4
console.log(`Square area: ${square.getArea()}`); // Output: Square area: 16
console.log(`Square perimeter: ${square.getPerimeter()}`); // Output: Square perimeter: 16
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
