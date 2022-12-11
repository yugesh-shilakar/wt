function circle(radius) {
    this.radius=radius;
    this.calcArea = calcArea; 
    this.calcPerimeter=calcPerimeter;
}
function calcArea() {
    return Math.PI * this.radius * this.radius;
}
function calcPerimeter() {
    return Math.PI * this.radius * 2;
} //Non obj method
var mycircle;
function getArea() {
    var r = parseInt(document.getElementById('radius').value); 
    mycircle = new circle(r); 
    document.write("<h1>The area of circle " + mycircle.calcArea() + "</h1>");
}
function getPerimeter() {
    var r = parseInt(document.getElementById('radius').value); mycircle = new circle(r);
    document.write("<h1>The perimeter of circle " + mycircle.calcPerimeter() + "</h1>");
}