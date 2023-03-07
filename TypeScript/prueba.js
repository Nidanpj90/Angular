"use strict";
maxValue(2,1);

function maxValue(value1, value2) {
    return Math.max(value1, value2);
}

//definición de tipos
//boolean

let isBoolean = false;

//number

let decimal =43.343;
let age = 20;

//String

let myName = 'Samuel';

//Array

let listAges = [10,12,40];
let listNames = ['Juan', 'María'];

//Tuplas

let personTuple;
personTuple = ['Samuel', 30];

//Enums
var color;
(function (color){
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
    color[color["Purple"] = 3] = "Purple";
    color[color["Brown"] = 4] = "Brown";
})(color||(color={}));

//Any

let notSure = '345';
notSure = 24;
notSure = true;

//Void

function alertUser() {
    alert('Alert with function void');
}

//Null
let u = null;

//undefined
let indefinido = undefined;