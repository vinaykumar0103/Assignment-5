"use strict"

/*
1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr

2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone.
*/


class Cylinder {
    constructor(radius, height) {
        this.height = height;
        this.radius = radius;
    }

    get getVolume() {
        return this.calcVolume();


    }

    calcVolume(){
        return Math.PI*this.radius*this.height;
    }
}

const cylinder = new Cylinder(4,5);
console.log(cylinder.getVolume);