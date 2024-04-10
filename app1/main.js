import { Canvas } from '../curs2/modules/canvas.js';

import { Square } from '../curs2/modules/square.js';
import { Circle } from '../curs2/modules/circle.js';
import { Triangle } from '../curs2/modules/triangle.js';

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

// draw a square
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 150, 10, 50, 'red');
square1.draw();
square1.reportArea();
square1.reportPerimeter();

// draw a circle
let circle1 = new Circle(myCanvas.ctx, myCanvas.listId, 80, 260, 130, 'yellow');
circle1.draw();
circle1.reportArea();
circle1.reportPerimeter();

// draw a triangle
let triangle1 = new Triangle(myCanvas.ctx, myCanvas.listId, 160, 320, 60, 'blue');
triangle1.draw();
triangle1.reportArea();
triangle1.reportPerimeter();

let square2= new Square (myCanvas.ctx , myCanvas.listId , 50 , 235   ,100 , "green");
square2.draw();