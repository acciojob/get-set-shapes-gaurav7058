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
        this.side=side;
    }
	
	getPerimeter(){
		return 4*side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
